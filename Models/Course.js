const mongoose = require('mongoose');
const db = require('../lib/db');

const Teacher = require("./Teacher");
const Formation = require('./Formation')
const Intern = require ('./Intern')
const Room = require("./Room");

const moment = require('moment')
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

    testIsValid(){

        let motifs = []

        if(!this.room || this.room == "")
          motifs.push('pas de room')
        if(!this.teacher || this.teacher == "")
          motifs.push('pas de prof')
        if(!this.formation || this.formation == "")
          motifs.push('pas de formation')
        if(!this.interns || this.interns.length < 1)
          motifs.push('pas assez de stagiaires')
        if(moment(this.end).isBefore(moment(this.before)))
          motifs.push('dates de fin avant date de debut')

        if(this.room.places < this.interns.length)
          motifs.push('pas assez de place dans la salle')
        if(this.formation.places < this.interns.length)
          motifs.push('pas assez de place dans la formation')
        if(this.formation.category != this.teacher.categories)
          motifs.push(`le professeur n'a pas la bonne catégorie`)

        if(!this.room.testIsValid())
          motifs.push('la salle nest pas valide')
        if(!this.formation.testIsValid())
          motifs.push('la formation nest pas valide')
        if(!this.teacher.testIsValid())
          motifs.push('le prof nest pas valide')

        this.interns.forEach(intern => {
            if(!intern.isValid())
                motifs.push(`le stagiaire ${intern._id} n'est pas valide`)
        });

        if(motifs.length > 0) return false
        else return true
    }

}

CourseSchema.loadClass(Course)

const CourseModel = db.model('Course', CourseSchema);

module.exports = CourseModel;
