const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = [];
let totalMonthlyExpense = 0;
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs");
app.get("/",(req, res)=>{
    res.render("list",{
        newListItem: items,
        monthlyExpense: totalMonthlyExpense
    })
})

app.post("/",(req, res)=>{
    totalMonthlyExpense += Number(req.body.cost);
    items.push({
        "newItem": req.body.newItem,
        "cost": Number(req.body.cost)
    });
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})