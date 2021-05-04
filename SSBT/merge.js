var fs = require("fs");

const wages = require("./SSBT_wages.json");
const employees = require("./SSBT_employees.json");

function data1() {
  return employees.map((data) => {
    if (data.ticketNo != null) {
      return Object.assign({}, data, {
        wageDetails: wages.filter((item) => data.ticketNo == item.ticketNo),
      });
    }
  });
}

fs.writeFile("result.json", JSON.stringify(data1()), function (err) {
  if (err) {
    console.log(err);
  }
});
