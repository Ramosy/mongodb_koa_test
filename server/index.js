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
    log = console.log;


//title图标path.join(process.cwd(), "client")
app.use(favicon(path.join(process.cwd(), "client/images/favicon.ico")));
/*app.use(function *() {
    switch (this.path) {
        case '/':
           var cookie =  this.request.header.cookie;
            if(!cookie.hasOwnProperty('test-session')) this.redirect("/login");
            break;
        case '/login':
          /!*  get.call(this);*!/
        case '/register':
            remove.call(this);
        default :
            remove.call(this);
            break;
    }
});*/

function get() {
    var session = this.session;
    console.log("sessionId的值"+this.sessionId);
    session.count = session.count || 0;
    session.count++;
    this.body = session.count;
}

function remove() {
    this.session = null;
    this.body = 0;
}
//自定义中间件
app.use(function *(next){
    var  headers = function(res, path, stats){
        return  res.set({
            "Last-Modified" : (new Date()).toUTCString(),
            "Pragma" : "no-cache",
            "Expires" : -1,
            "Cache-Control" : "no-cache"
        });

    };
    if(/^\/$/.test(this.path)){
        var header = this.request.header;
        var cookie =  this.request.header.cookie;
        if(!(header.hasOwnProperty(cookie)&&cookie.hasOwnProperty('test-session'))) this.redirect("/sign");
    }else if(/^\/sign$/.test(this.path)){
        yield send(this, '/sign.html', {root:"client",setHeaders:headers});
    }else if(/^\/register$/.test(this.path)){
        yield send(this, '/register.html', {root:"client",setHeaders:headers});
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
app.use(function *(next){(this.request.body?(log(this.request.body)):null);yield next;});

//session处理
 app.keys = ['test-session'];
 app.use(session({
 key:"test-session",
 store: new MongoStore()
 }));
//路由
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
