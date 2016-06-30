/**
 * Created by DEV on 2016/6/17.
 */
var router = require('koa-router')({prefix: '/api'});
var UserService = require('../model/User/api')();
var log = function (info,data) {console.log(info+JSON.stringify(data));};

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
router.post('/register', function *() {
    //http的post请求参数
    var data = this.request.body;
    //查找此工号是否注册
    var findData = yield UserService.findOne({card:data.card});
    //打印查询工号是否存在的信息
    log("DB findOne return data:",findData);
    //如果工号存在，则返回已经注册
    if(findData) {
        this.body ={
            result:{
                errorInfo:"You have already registered",
                errorCode:"ERROR_001"
            },
            status:false
        };
        return;
    }
    //未注册的工号，加入数据库中
    var queryData = yield UserService.add(data);
    if(queryData) {
        this.body ={
            result:{
                SuccessInfo:"You registered successfully"
            },
            status:true
        };
        return;
    }
    //打印存入数据库（返回）注册信息，并返回注册成功
    log("DB add return data:",queryData);
    this.body ={
        result:{
            errorInfo:"Your registration failed",
            errorCode:"ERROR_00X"//未知错误
        },
        status:false
    };
});
//管理员登陆
router.post('/sign', function *() {
    var data = this.request.body;
    //查询是否存在管理员
    var queryData = yield UserService.findOne({card:data.card});
    log("数据库操作结果：",queryData);
    //如果不存在管理员信息,返回登录失败
    if(!queryData) {
        //清除session
        this.session = null;
        this.body = {
            result:{
                errorInfo:"Your login failed",
                errorCode:"ERROR_002"//没有这个工号
            },
            status:false
        };
        return;
    }
    //如果存在管理员，并进行密码匹配，如果匹配成功则分配一个session
    if(data.password == queryData.password){
        var session = this.session;
        session.count = session.count || 0;
        session.count++;
        this.body = {
            result:{},
            status:true
        };
    }else {
        //清除session
        this.session = null;
        this.body = {
            result:{
                errorInfo:"Your login failed",
                errorCode:"ERROR_003"//有工号，但是密码错误
            },
            status:false
        };
    }


});

module.exports = router;
