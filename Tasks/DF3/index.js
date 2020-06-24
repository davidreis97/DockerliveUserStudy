const express = require('express')
const app = express()
const port = 3000

process.on('uncaughtException', function(err) {
    console.log("Could not bind");
});

app.listen(port, process.env.IP_ADDRESS || "NOT DEFINED", () => {console.log("Listening!")});

setTimeout(()=>{},100000000); //Simulate long-standing application