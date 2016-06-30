/**
 * Created by DEV on 2016/6/17.
 */
var app = require('koa')(),
    path = require("path"),
    os = require("os"),
    fs = require("fs"),
    router = require('./router/routers.js'),
    static = require('koa-static'),
    send = require('./tools/send_static_file.js'),
    bodyParser = require('koa-body-parser'),
    session = require('koa-generic-session'),
    MongoStore = require('koa-generic-session-mongo'),
    favicon = require('koa-favicon'),
    log = function (info,data) {console.log(info+JSON.stringify(data));},
    judgeSession = require('./tools/judgeSession.js');


//title图标path.join(process.cwd(), "client")
app.use(favicon(path.join(process.cwd(), "client/images/favicon.ico")));

//自定义中间件
app.use(function *(next){
    var headers = function(res, path, stats){
        return  res.set({
            "Last-Modified" : (new Date()).toUTCString(),
            "Pragma" : "no-cache",
            "Expires" : -1,
            "Cache-Control" : "no-cache"
        });

    };
    var header = this.request.header;
    var cookie =  this.request.header.cookie;
 /*   log("cookie:",cookie);*/
    if(/^\/$/.test(this.path)){
        if(!(header&&judgeSession(cookie))){
            this.redirect("/sign")
        }else {
            yield send(this, '/index.html', {root:"client",setHeaders:headers});
        }
    }else if(/^\/sign$/.test(this.path)){
        yield send(this, '/sign.html', {root:"client",setHeaders:headers});
    }else if(/^\/register$/.test(this.path)){
        yield send(this, '/register.html', {root:"client",setHeaders:headers});
    }else if(/^\/api/.test(this.path)){
        if(this.path == "/api/sign" || this.path == "/api/register"){yield next;}else {
            if(!(header&&judgeSession(cookie))) this.redirect("/sign");
        }
    }else {
        yield next;
    }
});

//静态文件
app.use(static(path.join(process.cwd(), "bower_components")));
app.use(static(path.join(process.cwd(), "node_modules")));
app.use(static(path.join(process.cwd(), "client")));

//请求体解析器
app.use(bodyParser());
//打印请求体日志
app.use(function *(next){(this.request.body?(log("request.body:",this.request.body)):null);yield next;});

//session处理
 app.keys = ['test-session'];
 app.use(session({
    key:"test-session",
    store: new MongoStore(),
    cookie:{
        path: '/',
        httpOnly: true,
        maxage: 24 * 60 * 60 * 1000, //one day in ms
        rewrite: true,
        signed: true
    }
 }));
//路由
app.use(router.routes()).use(router.allowedMethods());


module.exports = app;
