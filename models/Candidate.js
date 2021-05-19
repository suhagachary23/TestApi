const mongoose = require('mongoose');

const Candidate = mongoose.model('Candidate', new mongoose.Schema({
    name: {
        type: String
    },
    emailaddress: {
        type: String,
        unique: true
    },
}));

exports.Candidate = Candidate;