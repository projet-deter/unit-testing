const mongoose = require('mongoose');
const db = require('../lib/db');

const InternSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
});

class Intern {

    isValid(){
        if(this.age >= 18) return true
        return false
    }

}

InternSchema.loadClass(Intern);

const InternModel = db.model('Intern', InternSchema);

module.exports = InternModel;
