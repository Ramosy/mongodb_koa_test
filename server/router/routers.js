/**
 * Created by DEV on 2016/6/17.
 */
var router = require('koa-router')({prefix: '/api'});
var log = console.log;
PersonService = require('../model/Person/api')();
UserService = require('../model/User/api')();
router.post('/add', function *(next) {
       /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        UserService.add(data);
        yield next;
        this.body ={}
    });
router.post('/update', function *(next) {
        /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        PersonService.update(data);
        yield next;
        this.body ={}
    });

router.post('/delete', function *(next) {
        /* JSON.stringify(this.request.body);*/
        var data = this.request.body;
        PersonService.delete(data);
        yield next;
        this.body ={}
    });

router.post('/findOne', function *(next) {
/* JSON.stringify(this.request.body);*/
    var data = this.request.body;
    UserService.findOne(data);
    yield next;
    this.body ={}
});
//管理员注册
router.post('/register', function *(next) {
    JSON.stringify(this.request.body);
    var data = this.request.body;
    UserService.add(data);
    yield next;
    this.body ={}
});
//管理员登陆
router.post('/sign', function *(next) {
    JSON.stringify(this.request.body);
    var data = this.request.body;
    var userData = yield UserService.findOne({name:data.name});
    console.log("数据库操作结果："+"\n"+userData);
    this.body = {
        result:userData,
        status:true
    };

});

module.exports = router;
