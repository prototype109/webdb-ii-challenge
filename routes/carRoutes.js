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

module.exports = carRoute;
