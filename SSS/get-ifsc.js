const axios = require("axios").default;
const master = require("./account.json");
var fs = require("fs");

function getUser(ifsc) {
  try {
    const response = axios.get(`https://ifsc.razorpay.com/${ifsc}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

const bankDetails = async () => {
  return master.map((item) => {
    if (item.ifsc !== null) {
      let res = await getUser(item.ifsc);
      return res.data;
    }
  });
};

fs.writeFile("sample.json", bankDetails(), function (err) {
  if (err) {
    console.log(err);
  }
});
