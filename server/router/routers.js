/**
 * Created by DEV on 2016/6/17.
 */
var router = require('koa-router')({prefix: '/api'});
/*router.get('/index', function *(next) {
    this.body = "index.html";
});
router.get('/', function *(next) {
    this.body = "index.html";
});
router.get('/sign', function *(next) {
    this.body = "sign.html";
});*/
/*router.post('/test',koaBody, function *(next) {
    console.log("1");
/!*    console.log("request:"+JSON.stringify(this.request.body));*!/
    this.body = {};
});*/
router.post('/test', function *(next) {
        this.body = JSON.stringify(this.request.body);
        yield next;
    }
);
module.exports = router;
