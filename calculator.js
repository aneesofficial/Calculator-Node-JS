
const express= require("express");
const path = require("path");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const indexPath = path.join(__dirname, "./index.html");

app.get("/", function(req, res) {
  res.sendFile(indexPath);
});

app.post("/", function(req, res) {
  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);
  result= num1+num2;
  res.send("The Addition of number " + num1 +" and " + num2 +" is equal to : " +result );
});

app.listen(5000, function() {
  console.log("Server is running on port 5000");
});
