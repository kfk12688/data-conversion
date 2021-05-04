const data = require("./result.json");
var fs = require("fs");

// function calc() {
//   return data.map((item) =>
//     item.wageDetails.map(
//       (item1) =>
//         (item1.deductions.total =
//           item1.deductions.pfContribution +
//           item1.deductions.esiContribution +
//           item1.deductions.teaDeduction +
//           item1.deductions.advanceDeduction +
//           item1.deductions.otherDeduction)
//     )
//   );
// }

function changeDesc() {
  for (var a in data) {
    if (data[a].wageDetails != []) {
      // console.log(data[a].ticketNo);
      for (var i in data[a].wageDetails) {
        if (data[a].wageDetails[i].deductions) {
          data[a].wageDetails[i].deductions.total =
            data[a].wageDetails[i].deductions.esiContribution +
            data[a].wageDetails[i].deductions.pfContribution +
            data[a].wageDetails[i].deductions.teaDeduction +
            data[a].wageDetails[i].deductions.advanceDeduction +
            data[a].wageDetails[i].deductions.otherDeduction;
        }
        // console.log(data[a]);
      }
    }
  }
  return data;
}

fs.writeFile("sample.json", JSON.stringify(changeDesc()), function (err) {
  if (err) {
    console.log(err);
  }
});
