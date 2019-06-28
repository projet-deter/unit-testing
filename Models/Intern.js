const mongoose = require('mongoose');
const db = require('../lib/db');

const InternSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    created_at: {
        type: Date,
        default: Date.now
    },
});

const Intern = db.model('Intern', InternSchema);

module.exports = Intern;
