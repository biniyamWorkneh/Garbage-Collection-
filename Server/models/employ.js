const mongoose = require("mongoose");
const employSchema = new mongoose.Schema({
  Name: String,
  Role: String,
  Location: String,
});
const Employ = mongoose.model("Employ", employSchema);
module.exports = Employ;
