const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinksController.getAll);
router.get("/drinks/in-stock", drinksController.getInStock);
router.get("/drinks/:id", drinksController.getDrinkAboutId);
router.post("/drinks", drinksController.addDrink);
router.delete("/drinks/:id", drinksController.deleteDrink);
router.patch("/drinks/:id", drinksController.updateDrink);

module.exports = router;
