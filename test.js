const employees = require("./employees_sss");
const epf = require("./epf_sss");

function getEpf(uan) {
  return epf.filter((item) => item.uan === uan);
}

const d = employees.map((data) => (data.wageDetails[0].epf = getEpf(data.uan)));

console.log(JSON.stringify(d));
