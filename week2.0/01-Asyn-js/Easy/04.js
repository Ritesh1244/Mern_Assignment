const fs = require("fs");

const dataToWrite = "Hellow world";
fs.writeFile("a.txt", dataToWrite, (err) => {
  if (err) {
    console.error("Error occurred while writing to file. Status code: 500");
    return;
  }
});
