const express = require("express");
const app = express();
const router = require("./routes/routes");
const connectDB = require("./db/db");
const port = 5000;
// const hostname = "0.0.0.0";
require("dotenv").config();
app.use("/", express.static("public"));
app.use(express.json());
app.use("/", router);
try {
  connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is listening http://localhost:${port}`);
    // console.log(`Server is listening http://${hostname}:${port}`);
  });
} catch (error) {
  console.log("Error in the server");
}
