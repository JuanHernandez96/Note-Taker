const router = require('express').Router();
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) =>  {
    let note = fs.readFileSync("db/db.json")
    note = JSON.parse(note);
    res.json(note);
})

router.post("/notes", (req, res) => {
    let note = fs.readFileSync("db/db.json");
    note = JSON.parse(note);

    req.body.id = note.length.toString();

    let userN = req.body;
    console.log(req.body);
    note.push(userN);

    fs.writeFileSync(path.join(__dirname, "../db/db.json"),
    JSON.stringify(note, null, 2)
    );
    res.json(note)
})

module.exports = router;