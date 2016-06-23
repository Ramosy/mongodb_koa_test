/**
 * Created by DEV on 2016/6/22.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define schema
var PersonSchema = new Schema({
    name: String,
    age: Number,
    birthday: Date,
    gender: String,
    likes: [String]
});
var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;