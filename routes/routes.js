const express = require("express");
const router = express.Router();
const send_data = require("../controllers/controllers");
router.post("/login", send_data);
// router.post("/add", add);
// router.post("/get", get);
// router.post("/reset", reset);
module.exports = router;
