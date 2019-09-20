const express = require("express");
const route = express.Router();
const user = [{ nama: "ian", id: 2, age: 23 }];

route.get("/", (req, res, next) => {
  res.send({
    data: user
  });
});

route.get("/who", (req, res, next) => {
  res.send({
    data: [
      {
        nama: "bedain",
        id: 2,
        age: 23
      }
    ]
  });
});

route.post("/", (req, res, next) => {
  user.push(req.body);
  res.send({
    data: user
  });
});

route.delete("/:userId", (req, res, next) => {
  const idUser = user.findIndex(element => element.id == req.params.userId);
  console.log(idUser);
  if (idUser === -1) {
    res.send({
      data: `tidak ada user dengan id tersebut`
    });
  } else {
    user.splice(idUser, 1);
    res.send({
      data: user
    });
  }
});

route.put("/", (req, res, next) => {
  const idUser = user.findIndex(data => data.id == req.params.userId);
  console.log(idUser);
  if (iduser === -1) {
  res.send({
    data: `data error`
  });
 } else {
   user.splice(idUser, 1);
   res.send({
     data: user
   });
  }
});

module.exports = route;
