const express = require('express');
const router = express.Router();

const connect = require("../config/sqlConfig");

router.get("/", (req, res) => {
    res.json({ message: "The main interface of the Roku App - Movies Section" });
});

router.get("/users", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM tbl_users', function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/movies", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM tbl_movies', function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/tvs", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM tbl_tv', function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/music", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM tbl_music', function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

module.exports = router;