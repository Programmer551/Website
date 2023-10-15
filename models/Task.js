const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Must Provide the Name"],
  },
  phone: {
    type: Number,
    required: [false, "Must Provide the Number"],
  },
  email: {
    type: String,
    required: [false, "Must Provide the Email"],
  },
  text: {
    type: String,
    required: [false],
  },
});
module.exports = mongoose.model("Data", schema);
