/**
 * Created by DEV on 2016/6/13.
 */

    var app = require("./index.js"),
    config = require("./config.json");

app.listen(4000);

console.info("正在监听 http://"+config.ip+":"+config.port);