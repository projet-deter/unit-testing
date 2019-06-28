const mongoose = require("mongoose");
const db = require("../lib/db");

const Schema = mongoose.Schema;

const TeacherSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  categories: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

class Teacher {
  testIsValid() {
    let motifs = [];

    if (!this.firstname) motifs.push("pas de prénom");
    if (!this.lastname) motifs.push("pas de nom");
    if (this.firstname == "") motifs.push("prénom vide");
    if (this.lastname == "") motifs.push("nom vide");
    if (!this.categories) motifs.push("pas de catégories");
    if (this.categories == "") motifs.push("catégories vide");

    if (motifs.length > 0) return false;
    else return true;
  }
}

TeacherSchema.loadClass(Teacher);

const TeacherModel = db.model("Teacher", TeacherSchema);

module.exports = TeacherModel;
