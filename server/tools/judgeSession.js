/**
 * Created by ramosy on 2016/6/30.
 */
var app = require('koa')();
//自定函数，切割cookies拼装成数组,在判断是否有test-session
function judgeSession(cookies){
    var cookieArray = cookies.split(";");
    for(var i = 0 ; i < cookieArray.length ; i++){
        var cookiesArray = ((cookieArray[i]).split("="))[0];
        if( cookiesArray.trim()=='test-session'){
            return true;
        }
    }
    return false;
}

module.exports = judgeSession;