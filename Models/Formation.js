const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema

const FormationSchema = mongoose.Schema({
    name: String,
    category: String,
    places: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
});

class Formation {

    testIsValid(){

        let motifs = []

        if(!this.name)
          motifs.push('pas de nom')
        if(this.name == "")
          motifs.push('nom vide')
        if(!this.category)
          motifs.push('pas de catégories')
        if(this.category == "")
          motifs.push('catégorie vide')
        if(this.place > 0){
          motifs.push("places supérieur à zero ")
        }
        if(motifs.length > 0) return false
        else return true 
    }
}

FormationSchema.loadClass(Formation)

const FormationModel = db.model('Formation', FormationSchema);

module.exports = FormationModel;
