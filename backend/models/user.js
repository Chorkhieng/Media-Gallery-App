const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minlength: 8},
    image: {type: String, require: true},
    posts: [{type: mongoose.Types.ObjectId, require: true, ref: 'Post'}],
    likes: [{type: mongoose.Types.ObjectId, ref: 'Post'}]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);