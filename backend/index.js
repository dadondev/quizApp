const datas = require("./data/data.js");
const express = require("express");
const Joi = require("joi");
const app = express();

app.get("/sections", (req, res) => {
  console.log("yubordim");
  return res.status(200).send(datas);
});

app.listen(5001, () => {
  console.log("ishlayapman");
});
