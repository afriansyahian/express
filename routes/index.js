const express = require("express");
const route = express.Router();

route.get("/", (req, res, next) => {
  res.send({
    title: "express"
  });
});



module.exports = route