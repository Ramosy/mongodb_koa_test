/**
 * Created by DEV on 2016/6/17.
 */
var router = require('koa-router')({prefix: '/api'}),
    session = require('koa-generic-session'),
    MongoStore = require('koa-generic-session-mongo'),
    UserService = require('../model/User/api')();
    log = console.log;

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
    log(JSON.stringify(this));
    log("body对象:"+JSON.stringify(this.request.body));
    var data = this.request.body;
    var status = false;
    var queryData = yield UserService.findOne({name:data.name});
    console.log("数据库操作结果："+"\n"+queryData);
    if(!queryData){
        status = false;
        this.body = {
            result:{},
            status:status
        };
    }else  if(data.password === queryData.password){
        status = true;
        var session = this.session;
        console.log("sessionId的值"+this.sessionId);
        session.count = session.count || 0;
        session.count++;
        this.body = {
            result:{},
            status:status
        };
    }


});

module.exports = router;
