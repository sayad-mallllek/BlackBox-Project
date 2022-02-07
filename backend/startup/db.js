const mongoose = require("mongoose");
const { apiUrl } = require("../environment");
module.exports = function () {
  mongoose.connect(URL).then(() => {
    console.log("Connected...");
  });
};
