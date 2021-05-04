var fs = require("fs");

const data = require("./result.json");

function tolower() {
  for (var a in data) {
    if (data[a].bankAccounts != []) {
      // console.log(data[a].ticketNo);
      for (var i in data[a].bankAccounts) {
        if (data[a].bankAccounts[i].branch) {
          data[a].bankAccounts[i].branch = data[a].bankAccounts[
            i
          ].branch.toLowerCase();
        }
        // console.log(data[a]);
      }
    }
  }
  return data;
}

fs.writeFile("resultstolower.json", JSON.stringify(tolower()), function (err) {
  if (err) {
    console.log(err);
  }
});
