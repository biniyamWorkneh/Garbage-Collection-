const { urlencoded } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const RouEmploy = require("./routes/employ");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/employ", RouEmploy);

app.listen(6000, () => console.log("server is connected"));
