const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema

const CourseSchema = mongoose.Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    formation: { type: Schema.Types.ObjectId, ref: 'Formation' },
    interns: [{ type: Schema.Types.ObjectId, ref: 'Intern' }],
    begin: { type: Date },
    end: { type: Date },
});

class Course {

    

}

CourseSchema.loadClass(Course)

const CourseModel = db.model('Course', CourseSchema);

module.exports = CourseModel;
