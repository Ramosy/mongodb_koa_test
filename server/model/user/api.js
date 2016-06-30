/**
 * Created by DEV on 2016/6/22.
 */
var UserModel = require('./model');
var mongoose = require('mongoose');
var log = function (data) {console.log(JSON.stringify(data));};
// Use bluebird
mongoose.Promise = require('bluebird');
function UserService(args){
    if(!(this instanceof UserService)){
        return new UserService(args);
    }
}

//添加数据
UserService.prototype.add = function (data) {
     return (new UserModel(data)).save(function(err,result){
         if(err) log(err);
     });
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
    return UserModel.findOne(data);
};

module.exports = UserService;