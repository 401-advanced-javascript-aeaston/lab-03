const fs = require ('fs');

let files = process.argv.slice(2);

// grabs contents of file turns it into string

// series of nested callbacks

fs.readFile('./files/test.txt', (err, data) => {
  if(err) {throw err;}
  let contents = data.toString();
  console.log('old contents', contents);
  let randomNum = Math.random();
  let newBuffer = Buffer.from(randomNum.toString());

  fs.writeFile('./files/test.txt', newBuffer, (err, data) => {
    if(err) {throw err;}

    fs.readFile('./files/test.txt', (err, data) => {
      if(err) {throw err;}
      let contents = data.toString();
      console.log('new contents', contents);
    })
  })
})
