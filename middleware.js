const express = require("express");
const app = express();

app.use(sayMyName);
app.get("/", (req, res) => {
    console.log('after Middleware');
res.send("Welcome to middleware");
});
function sayMyName(req,res,next){
    console.log("In Middleware");
    next(); 
}
app.listen(5000, () => {
    console.log("Server Running");
});