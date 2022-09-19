const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Number,
  coffeine: Boolean,
  size: String,
  description: String,
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
