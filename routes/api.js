const express = require('express');
const router = express.Router();

const connect = require("../config/sqlConfig");

router.get("/", (req, res) => {
    res.json({ message: "The main interface of the Roku App - Movies Section" });
});

router.get("/users", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM tbl_user', function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/movies-parents", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_movies WHERE movies_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/movies-kids", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_movies WHERE movies_section = 'kids'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})


router.get("/tvs-parents", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_tv WHERE tv_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})


router.get("/tvs-kids", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_tv WHERE tv_section = 'kids'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/music-parents", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_music WHERE music_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/music-kids", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_music WHERE music_section = 'kids'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

module.exports = router;