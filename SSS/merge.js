var fs = require("fs");

const month = require("./mar-21.json");
const datas = require("./result.json");

function data1() {
  return datas.map((data) => {
    if (data.uan != null) {
      return Object.assign({}, data, {
        wageDetails: [
          data.wageDetails[0],
          data.wageDetails[1],
          data.wageDetails[2],
          data.wageDetails[3],
          month.find((item) => item.UAN == data.uan),
        ],
      });
    }
  });
}

fs.writeFile("result.json", JSON.stringify(data1()), function (err) {
  if (err) {
    console.log(err);
  }
});
