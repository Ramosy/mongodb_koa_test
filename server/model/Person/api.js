/**
 * Created by DEV on 2016/6/22.
 */
    require("mongoose").connect('mongodb://localhost/persons');
    var PersonModel = require('./model');

function PersonService(args){
    if(!(this instanceof PersonService)){
        return new PersonService(args);
    }
}

//添加数据
PersonService.prototype.add = function (data) {
    var Person = new PersonModel(data);
    Person.save();
};
//修改数据
PersonService.prototype.update = function (data) {
    PersonModel.update({name:data.name},{age:data.age},function(err, numberAffected, raw){
        if (err) return console.log(err);
    });
};

//删除数据
PersonService.prototype.delete = function(data){
    PersonModel.remove({name: data.name}, function(err){
        if (err) console.log(err);
    })
};

//查询数据
PersonService.prototype.findOne = function(data){
    PersonModel.findOne({name: data.name}, function(err, cat){
        if (err) console.log(err);
        console.log(cat);
    })
};

module.exports = PersonService;