const express = require("express");
const router = express.Router();
const db = require("../models");


// GET ALL USERS

router.get("/api/parties", (req,res) => {
    db.Party.findAll({
        include:[db.User]
    })
    .then(dbParty => res.json(dbParty));
});

// CREATE NEW PARTY
router.post("/api/parties", (req, res) => {
    console.log(req.body);
    db.Party.create(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => console.log(err));
})


module.exports = router;