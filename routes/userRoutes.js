const express = require("express");
const router = express.Router();
const db = require("../models");


// GET ALL USERS

router.get("/api/users", (req,res) => {
    db.User.findAll({
        include:[db.Party]
    })
    .then(dbUsers => res.json(dbUsers));
});

// CREATE NEW USER

router.post("/api/users", (req, res) => {
    console.log(req.body);
    db.User.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => console.log(err));
})



module.exports = router;