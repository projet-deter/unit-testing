const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema

const RoomSchema = mongoose.Schema({
    places: Number,
    name: String,
    created_at: {
        type: Date,
        default: Date.now
    },
});

const RoomModel = db.model('Room', RoomSchema);

module.exports = RoomModel;
