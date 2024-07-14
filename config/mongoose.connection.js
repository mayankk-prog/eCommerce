const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://bhmayank001:bhmayank@ecommerce.emk5zxj.mongodb.net/")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("monogodb not connected", err);
  });

module.exports = mongoose.connection; 
