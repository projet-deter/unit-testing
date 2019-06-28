const mongoose = require("mongoose");
const db = require("../lib/db");

const Schema = mongoose.Schema;

const RoomSchema = mongoose.Schema({
  places: Number,
  name: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

class Room {
  testIsValid() {
    let motifs = [];

    if (!this.name) motifs.push("pas de nom");
    if (this.name == "") motifs.push("nom vide");
    if (!this.places) motifs.push("pas de numero de places");
    if (this.places == "") motifs.push("numéro vide");
    if (this.places < 1) {
      motifs.push("Numero inférieur à zero ");
    }

    if(motifs.length > 0) return false
    else return true
  }
}

RoomSchema.loadClass(Room);

const RoomModel = db.model("Room", RoomSchema);

module.exports = RoomModel;
