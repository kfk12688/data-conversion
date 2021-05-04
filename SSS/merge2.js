var fs = require("fs");

const month = require("./mar-exp-21.json");
const datas = require("./result2.json");

function data1() {
  return datas.map((data) => {
    if (data.ticketNo != null) {
      return Object.assign({}, data, {
        wageDetails: [
          data.wageDetails[0],
          data.wageDetails[1],
          data.wageDetails[2],
          data.wageDetails[3],
          month.find((item) => item.tkno == data.ticketNo),
        ],
      });
    }
  });
}

fs.writeFile("result2.json", JSON.stringify(data1()), function (err) {
  if (err) {
    console.log(err);
  }
});
