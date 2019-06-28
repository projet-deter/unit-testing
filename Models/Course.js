const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema

const FormationSchema = mongoose.Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Intern' },
    teacher: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
    interns: [{ type: Schema.Types.ObjectId, ref: 'Intern' }],
    begin: { type: Date },
    end: { type: Date },
});

class Formation {

    

}

FormationSchema.loadClass(Formation)

const FormationModel = db.model('Formation', FormationSchema);

module.exports = FormationModel;
