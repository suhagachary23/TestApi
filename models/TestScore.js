const mongoose = require('mongoose');

const TestScore = mongoose.model('TestScore', new mongoose.Schema({
    first_round: {
        type: Number
    },
    second_round: {
        type: Number
    },
    third_round: {
        type: Number
    },
    emailaddress: {
        type: String,
        unique: true
    },
}));

exports.TestScore = TestScore;