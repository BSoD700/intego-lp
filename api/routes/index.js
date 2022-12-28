const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", function (req, res, next) {
  res.render("index", { title: "prices" });
});

router.get("/getPriceByBundle", function (req, res, next) {
  let { bundle, year, seats, currency = "usd" } = req.query;

  try {
    const jsonString = fs.readFileSync("./public/jsons/prices.json");
    const prices = JSON.parse(jsonString);

    let filteredBundles = [];

    const arr = Object.entries(prices).map(([key, value]) => {
      filteredBundles = Object.keys(value)
        .filter((key) => {
          if (bundle) {
            let isName = key.startsWith(bundle);
            if (isName) {
              let name = key.split(bundle)[1].split("_");
              // remove empty array's slots
              const sitAndYear = name.filter((a) => a != "");
              return checkSeatsAndYear(sitAndYear);
            }
          } else {
            return key;
          }
        })
        .reduce((obj, key) => {
          obj[key] = value[key];
          return obj;
        }, {});
      return { [key]: filteredBundles };
    });

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(arr, null, 3));
  } catch (err) {
    res.send(err);
    return;
  }

  function checkSeatsAndYear(name) {
    if (year && seats) {
      if (year != "*" && seats != "*") {
        return name[1] == year && name[0] == seats;
      } else if (year != "*" && seats == "*") {
        return name[1] == year;
      } else if (seats != "*" && year == "*") {
        return name[0] == seats;
      } else {
        return name;
      }
    } else {
      res.send("must contain year and seat");
      return;
    }
  }
});

module.exports = router;
