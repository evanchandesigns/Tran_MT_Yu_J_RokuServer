const express = require('express');
const router = express.Router();
const connect = require("../config/sqlConfig");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res) => {
    res.json({ message: "You hit the ums route" });
})

router.post('/login', (req, res) => {
    connect.query(`SELECT * FROM tbl_user WHERE user_name = "${req.body.username}" AND user_pass = "${req.body.password}"`, (err, row) => {
        if (err) throw err;

        if (row.length) {
            res.status(200).json(row[0]);
        } else {
            console.log("User not found");
        }
    });
})

module.exports = router;