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
    log = console.log;

//静态文件
app.use(static(path.join(process.cwd(), "bower_components")));
app.use(static(path.join(process.cwd(), "client")));

//请求体解析器
app.use(bodyParser());
app.use(function *(next){log(this.request.body);yield next;});

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
        yield send(this, '/index.html', {root:"client",setHeaders:headers});
    }else {
        yield next;
    }
});

//路由
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
