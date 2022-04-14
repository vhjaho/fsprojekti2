var express = require("express");
var router = express.Router();

const axios = require("axios");
const params = {
  access_key: "d2e5e8f1b186281d5a96e7b36c297f5b",
  query: "London",
};

axios
  .get("http://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;

    console.log(apiResponse);

    router.get("/", function (req, res, next) {
      res.render("index", apiResponse);
    });

  })
  .catch((error) => {
    console.log(error);
  });

module.exports = router;
