const express = require("express");
const router = express.Router();
const connection = require("./db");

function getEPF(uan) {
  let sql = "SELECT * FROM `epf` WHERE `uan`= ?";
  const res = connection.query(sql, [uan], function (err, response, fields) {
    if (err) throw err;
    return response;
  });
  return res;
}

router.get("/", function (req, res) {
  let sql = `SELECT * FROM employees`;
  let resultData;
  connection.query(sql, function (err, response, fields) {
    if (err) throw err;
    let result = response.map((data) => ({
      ...data,
      salary: [],
      otDetails: [],
      wageDetails: [
        {
          epf: {},
          deductions: {},
          salaryDays: {},
          incentives: {},
        },
      ],
    }));
    res.send({ result });
  });
});

module.exports = router;
