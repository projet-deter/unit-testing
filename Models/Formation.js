const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema

const FormationSchema = mongoose.Schema({
    name: String,
    categories: String,
    places: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
});

class Formation {

}

FormationSchema.loadClass(Formation)

const FormationModel = db.model('Formation', FormationSchema);

module.exports = FormationModel;
