const express = require("express");
const Employ = require("../models/employ");
const router = express.Router();

router.get("/find", async (req, res) => {
  const getEmploy = await Employ.find()
    .then((getEmploy) => res.json(getEmploy))
    .catch((err) => console.log(err));
});

module.exports = router;
