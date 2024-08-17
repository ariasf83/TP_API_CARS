const express = require("express");
const carSchema = require("../models/car");

const router = express.Router();  

// create cars 
router.post("/cars",(req , res) => {
    const car= carSchema(req.body);
    car
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all cars
router.get("/cars",(req , res) => {
    carSchema
       .find()
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

// get a car
router.get("/cars/:id",(req , res) => {
    const {id} = req.params;
    carSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

// update a car
router.put("/cars/:id", (req, res) => {
    const { id } = req.params;
    const { brand, model, year, engine, color } = req.body;
    carSchema
      .updateOne({ _id: id }, { $set: { brand, model, year, engine, color } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// delete a user
router.delete("/cars/:id", (req, res) => {
    const { id } = req.params;
    carSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router;