// const data = require("./result.json");
// var fs = require("fs");
// const fetch = require("node-fetch");

// function changeDesc() {
//   for (var a in data) {
//     if (data[a].bankAccounts != []) {
//       // console.log(data[a].ticketNo);
//       for (var i in data[a].bankAccounts) {
//         if (
//           data[a].bankAccounts[i].ifsc != "" ||
//           data[a].bankAccounts[i].ifsc != null
//         ) {
//           let ifsc = data[a].bankAccounts[i].ifsc;
//           let url = `https://ifsc.razorpay.com/${ifsc}`;
//           let bankdetails = fetch(url);
//           bankdetails.then((res) => res.json()).then((dd) => dd);
//         }
//         console.log(data[a].bankAccounts[i].bankName);
//         // console.log(data[a]);
//       }
//     }
//   }
//   return data;
// }

// fs.writeFile("sample.json", JSON.stringify(changeDesc()), function (err) {
//   if (err) {
//     console.log(err);
//   }
// });

const axios = require("axios").default;
const master = require("./result.json");
var fs = require("fs");

function getUser(ifsc) {
  try {
    const response = axios.get(`https://ifsc.razorpay.com/${ifsc}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
let ar = [];
const result = async () => {
  for (var a in master) {
    if (master[a].bankAccounts != []) {
      for (var i in master[a].bankAccounts) {
        if (
          master[a].bankAccounts[i].ifsc !== "" ||
          master[a].bankAccounts[i].ifsc !== null
        ) {
          let res = await getUser(master[a].bankAccounts[i].ifsc);
          return Object.assign({}, master, { banks: [res.data] });
        }
      }
    }
  }
  return master;
};

result();

fs.writeFile("samples.json", ar, function (err) {
  if (err) {
    console.log(err);
  }
});
