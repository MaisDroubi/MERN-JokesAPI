const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {type:String,required:[true,"setup is required"],minlength:[10,"setup must be at least 10 characters"]},
    punchline: {type:String,required:[true,"punchline is required"],minlength:[3,"punchline must be at least 3 characters"]}
},{timestamps:true});

const Joke =  mongoose.model('joke', JokeSchema);

module.exports = Joke;

