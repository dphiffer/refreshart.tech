console.log("server is starting");

//like an import statement, asking to import Express by declaring it a variable
//but express is actually a neat function

var express = require('express');

var app = express();

//this will open Port 3000
var server = app.listen(3000, listening);

//added a callback to check that the program is getting to this point ok
function listening() {

  console.log("listening... ");
}

app.use(express.static('site'));
