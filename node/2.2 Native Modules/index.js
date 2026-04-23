const fs = require('fs');

/* fs.writeFile('hello.txt', 'Hello, World!'+ " Message from Kolyamba! "+ Date.now(), (err) => {
  if (err) throw err;
  console.log('File has been saved!');
}) */

fs.readFile('hello.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});