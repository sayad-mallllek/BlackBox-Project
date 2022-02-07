const { port } = require("./environment");
const express = require("express");
const config = require("dotenv").config();
const app = express();

app.listen(process.env.PORT || port, function () {
    console.log(`Server is listening at port: ${process.env.PORT || port}...`);
  });