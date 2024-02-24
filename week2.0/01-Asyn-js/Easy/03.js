const fs = require("fs");

let a = 0;
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
  for (let i = 0; i < 1000000000; ++i) {
    a = a + i;
  }
  const afterDate = new Date();
  const afterTime = afterDate.getTime();

  console.log(afterTime - beforeTime);
});

const beforeDate = new Date();
const beforeTime = beforeDate.getTime();
console.log("mssg in the console");
