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
    if (this.places > 0) {
      motifs.push("Numero supérieur à zero ");
    }
  }
}

RoomSchema.loadClass(Room);

const RoomModel = db.model("Room", RoomSchema);

module.exports = RoomModel;
