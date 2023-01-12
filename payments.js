const express = require('express');

const router = express.Router();

const suppliers = [
    {
        id: 0,
        name: "Alpha Networking",
        value: 190.00
    },
    {
        id: 1,
        name: "Carrefour",
        value: 199.00
    },
    {
        id: 2,
        name: "Fire Base",
        value: 89.00
    }
];

const employees = [
    {
        firstName : "John",
        lastName : "Doe",
        value: 202.00
    },
    {
        firstName : "Craig",
        lastName : "Anderson",
        value: 200.50
    },
    {
        firstName : "Tom",
        lastName : "Weasley",
    },
    {
        firstName : "Andrew",
        lastName : "Walker",
        value: 190.00
    }
];

router.get("/suppliers",(req, res) => {
    res.render("paycheck_suppliers", { paycheck: suppliers})
})

router.post("/suppliers/new",(req, res) => {
    res.send("adding new payment for employee")
})

router.get("/suppliers/:id",(req, res) => {
    res.send(`supplier payment with Id ${req.params.id}`)
})

router.put("/suppliers/:id", (req, res) => {
    res.send(`editing supplier payment with Id ${req.params.id}`)
})

router.delete("/suppliers/:id", (req, res) => {
    res.send(`deleting supplier payment with Id ${req.params.id}`)
})

router.get("/employees",(req, res) => {
    res.render("paycheck_employees",{ paycheck: employees})
})

router.param("id", (req, res, next, id) => {
    req.users = users[id]
    next();
})

router.post('/employees/', (req, res) => {

    console.log(`imput data: ${req.body.firstName}, ${req.body.lastName}, ${req.body.val}`);
    // const isValid = req.body.firstName != "undefined" && req.body.lastName != undefined && req.body.val != undefined;
    const isValid = false;
    console.log(`valid request: ${isValid}`);
    if(isValid == true)
    {
        console.log("adding:");
        employees.push(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                value: req.body.val
            })
        res.redirect('/payments/employees');
    }
    else
    {
        console.log('required fields are empty');
        res.render('paycheck_employees_add', {
             firstName : req.body.firstName,
             lastName: req.body.lastName,
             val: req.body.val
            });
    }
})

router.get('/employees/new', (req, res) => {
    res.render("paycheck_employees_add");
})

router.get('/employees/:id', (req, res) => {
    res.send(`Employee with id ${req.params.id}`)
})

router.put('/employees/:id', (req, res) => {
    res.send(`Editing employee with id ${req.params.id}`);
})

router.delete('/employees/:id', (req, res) => {
    res.send(`Deleting employee with id ${req.params.id}`);
})

module.exports = router;