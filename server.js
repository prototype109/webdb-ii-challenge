const express = require("express");
const server = express();
const carRoute = require("./routes/carRoutes");

server.use(express.json());
server.use("/cars", carRoute);

server.get("/", (req, res) => {
  res.send("Home page of cars api");
});

module.exports = server;
