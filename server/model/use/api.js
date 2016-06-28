/**
 * Created by DEV on 2016/6/22.
 */
var UserModel = require('./model');

function UserService(args){
    if(!(this instanceof UserService)){
        return new UserService(args);
    }
}

//添加数据
UserService.prototype.add = function (data) {
    var User = new UserModel(data);
    User.save(function(error) {
        if(error) {
            console.log(error);
        } else {
            console.log('saved OK!');
        }
        // 关闭数据库链接
        db.close();
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
    UserModel.findOne({name: data.name}, function(err, cat){
        if (err) console.log(err);
        console.log(cat);
    })
};

module.exports = UserService;