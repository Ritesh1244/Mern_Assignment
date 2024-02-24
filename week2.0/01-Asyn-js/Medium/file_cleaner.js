const fs = require("fs");

function finaldata(sentence){
  let data1="";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      continue;
    } else {
      data1 += sentence[i];
    }
  }
  return data1;
}

function Read_File() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

async function main2() {
  try {
    const sentence = await Read_File();
    const data2 = finaldata(sentence);

   
    fs.writeFile("a.txt", data2, (err) => {
      if (err) {
        console.error("Error occurred while writing to file:", err);
        return;
      }
      console.log("File has been successfully updated.");
    });
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

main2();
