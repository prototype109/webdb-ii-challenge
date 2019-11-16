const express = require("express");
const db = require("../data/dbConfig");
const carRoute = express.Router();

carRoute.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json(error);
  }
});

carRoute.get("/:id", validateId, async (req, res) => {
  res.status(200).json(req.car);
});

carRoute.post("/", validateCar, async (req, res) => {
  try {
    const car = await db("cars").insert(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
});

async function validateId(req, res, next) {
  try {
    const car = await db("cars").where("id", req.params.id);
    if (car.length) {
      req.car = car;
      next();
    } else {
      res.status(404).json({ message: "Resource with that id not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function validateCar(req, res, next) {
  const reqBody = req.body;
  if (Object.keys(reqBody).length) {
    if (!reqBody.vin || !reqBody.make || !reqBody.model || !reqBody.mileage) {
      res.status(400).json({ message: "Missing required data from body" });
    } else {
      next();
    }
  } else {
    res.status(500).json({ message: "Request body is missing" });
  }
}

module.exports = carRoute;
