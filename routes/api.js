const express = require('express');
const router = express.Router();

const connect = require("../config/sqlConfig");

router.get("/", (req, res) => {
    res.json({ message: "The main interface of the Roku App - Movies Section" });
});

router.get("/parents/movies", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_movies WHERE movies_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/parents/movies/eraone", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_movies WHERE movies_year < 1980 AND movies_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/parents/movies/eratwo", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_movies WHERE movies_year > 1979 AND movies_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/parents/tv", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_tv WHERE tv_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/parents/tv/eraone", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_tv WHERE tv_year < 1980 AND tv_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/parents/tv/eratwo", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_tv WHERE tv_year > 1979 AND tv_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/parents/music", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_music WHERE music_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

router.get("/parents/music/eraone", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_music WHERE music_year < 1980 AND music_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/parents/music/eratwo", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_music WHERE music_year > 1979 AND music_section = 'parents'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });

})

router.get("/kids", (req, res) => {
    connect.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query("SELECT * FROM tbl_music, tbl_movies, tbl_tv WHERE music_section = 'kids' AND tv_section = 'kids'AND movies_section = 'kids'", function (error, results) {
            connection.release();

            if (error) throw error;
            res.json(results);
        });
    });
})

module.exports = router;