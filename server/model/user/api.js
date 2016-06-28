/**
 * Created by DEV on 2016/6/22.
 */
var mongoose = require('mongoose');
var db_user = mongoose.createConnection('mongodb://localhost/user');
var UserModel = require('./model');

function UserService(args){
    if(!(this instanceof UserService)){
        return new UserService(args);
    }
}

//添加数据
UserService.prototype.add = function (data) {
    var User = new UserModel(data);
    User.save();
};
//修改数据
UserService.prototype.update = function (data) {
    UserModel.update({name:data.name},{password:data.password},function(err, numberAffected, raw){
        if (err) return console.log(err);
    });
};

//删除数据
UserService.prototype.delete = function(data){
    UserModel.remove({card: data.card}, function(err){
        if (err) console.log(err);
    })
};

//查询数据
UserService.prototype.findOne = function(data){
    UserModel.findOne({name: data.name}, function(err, cat){
        if (err) console.log(err);
        console.log(cat);
    })
};

module.exports = UserService;