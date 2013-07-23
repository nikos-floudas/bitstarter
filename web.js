var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var inpbuf = fs.readFileSync('index.html');
var instr = inpbuf.toString();

app.get('/', function(request, response) {
  response.send(instr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
