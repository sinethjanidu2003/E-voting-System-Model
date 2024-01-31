const express = require("express");
const mainRouter = require("./Routes/index.js");
const bodyParser = require('body-parser');  
const path = require("path"); 




const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//app Settings
app.use(urlencodedParser);
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(mainRouter);
app.listen('3000',()=>{
    console.log("Server is running and up with a port ");
});