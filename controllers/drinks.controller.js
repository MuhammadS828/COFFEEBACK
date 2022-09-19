const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getAll: async (req, res) => {
    try {
      const drinks = await Drink.find({}, { name: 1, price: 1 });
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },
  addDrink: async (req, res) => {
    const { name, price, inStock, coffeine, size, description } = req.body;
    try {
      const drinks = await Drink.create({
        name,
        price,
        inStock,
        coffeine,
        size,
        description,
      });
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteDrink: async (req, res) => {
    try {
      await Drink.findByIdAndDelete(req.params.id);
      res.json("added drink");
    } catch (error) {
      res.json(error.message);
    }
  },
  updateDrink: async (req, res) => {
    const { name, price, inStock, coffeine, size, description } = req.body;
    try {
      const drinks = await Drink.updateOne({
        name,
        price,
        inStock,
        coffeine,
        size,
        description,
      });
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },
  getInStock: async (req, res) => {
    try {
      const drinks = await Drink.find({ inStock: { $gt: 0 } });
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },
  getDrinkAboutId: async (req, res) => {
    try {
      const drinks = await Drink.findById(req.params.id);
      res.json(drinks);
    } catch (error) {
      res.json(error.message);
    }
  },
};
