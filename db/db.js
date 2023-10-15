const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB is Connected");
    })
    .catch((Error) => {
      console.log(Error);
    });
};
module.exports = connectDB;
