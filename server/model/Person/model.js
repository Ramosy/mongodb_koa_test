/**
 * Created by DEV on 2016/6/22.
 */

function Person(){
    var mongoose = require('mongoose');
    var db_persons = mongoose.createConnection('mongodb://localhost/persons');
    // 链接错误
    db_persons.on('error', function(error) {
        console.log(error);
    });
    var Schema = mongoose.Schema;
    // define schema
    var PersonSchema = new Schema({
        name: String,
        age: Number,
        birthday: Date,
        gender: String,
        likes: [String]
    });
   return db_persons.model('Person', PersonSchema);
}


module.exports = Person();