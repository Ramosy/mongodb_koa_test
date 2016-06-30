/**
 * Created by DEV on 2016/6/22.
 */
function User(){
    var mongoose = require('mongoose');
    var assert = require('assert');
    var db_user = mongoose.createConnection('mongodb://localhost/user');
    var Schema = mongoose.Schema;
    var autoIncrement = require('mongoose-auto-increment');//自增ID 模块
    autoIncrement.initialize(db_user);   //初始化
    // 链接错误
    db_user.on('error', function(error) {
        console.log("链接错误:"+error);
    });
    // define schema
    var UserSchema = new Schema({
        name: String,
        password:String,
        card:{ type: Number, min: 1, max: 1000000 },
        mobile:{ type: Number},
        authority:Schema.Types.Mixed,
        userID:{ type: Number, min: 1, max: 1000000 }
    });
    UserSchema.plugin(autoIncrement.plugin, {
        model: 'UserModel',   //数据模块，需要跟同名 x.model("User", UserSchema);
        field: 'userID',     //字段名
        startAt: 1,    //开始位置，自定义
        incrementBy: 1    //每次自增数量
    });
    var UserModel = db_user.model('User', UserSchema);
   return UserModel;
}


module.exports = User();