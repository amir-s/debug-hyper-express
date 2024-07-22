const fs = require("fs");

const LINES = 20000000;

let s = "";
for (let i = 0; i < LINES; i++) {
  if (i % 1000000 === 0) {
    console.log(`generating './sample.txt' ${Math.round((i / LINES) * 100)}%`);
  }
  s += `test ${i + 1}\n`;
}

fs.writeFileSync("./sample.txt", s);
