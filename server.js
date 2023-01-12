const express = require('express');
const payments = require('./payments');
const app = express();

app.set('view engine', 'ejs');
app.use(logger);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.user(express.json())
app.get("/download",(req, res) => {
    console.log("Here");
    // res.download("virus.txt");
    res.render("download", {text: "1234"})
})

//router for payments crud
app.use('/payments', payments);

//middleware takes a function to execute next
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

//http://localhost:3000/
app.listen(3000);