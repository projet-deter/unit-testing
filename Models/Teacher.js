const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema

const TeacherSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  categories: String,
  created_at: {
    type: Date,
    default: Date.now
  },
});

class Teacher {

}

TeacherSchema.loadClass(Teacher)

const TeacherModel = db.model('Teacher', TeacherSchema);

module.exports = TeacherModel;
