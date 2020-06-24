fs = require('fs')
fs.readFile('/file', 'utf8', function (err,data) {
  if (err) {
    console.log("Could not read file");
    process.exit(1); 
  }
  console.log(data);
});

setTimeout(()=>{},100000000); //Simulate long-standing application