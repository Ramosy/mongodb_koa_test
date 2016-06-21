/**
 * Created by ramosy on 2016/6/17.
 */

// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
module.exports = function() {
    // define schema
    var PersonSchema = new Schema({
        name: String,
        age: Number,
        birthday: Date,
        gender: String,
        likes: [String]
    });
    mongoose.model('Person', PersonSchema);
};

