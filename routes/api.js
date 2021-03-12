const express = require('express');
// express router handles incoming requests and directs them where they need to go
// like a traffic cop
const router = express.Router();

// import the sql connection
const connect = require("../config/sqlConfig");

// think of route handlers like PHP functions
router.get("/", (req, res) => {
    //res.json = echo json_encode(....) in PHP
    res.json({ message: "You hit the api route" });
});

// this is the /api/users route handler
router.get("/users", (req, res) => {
    // run a SQL query here
    //res.json(query result here)
    // echo a msg -> just like PHP
    res.json({ message: "All users route" });
})

router.get("/items", (req, res) => {
    // run a SQL query here -> get all movies from my DB

    connect.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM tbl_items', function (error, results) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // res.json(query result here)
            // echo a msg -> just like PHP
            res.json(results);

            // Don't use the connection here, it has been returned to the pool.
        });
    });
})

// dynamic route handler that accept a parameter
// this is like $_GET["id"] : (req.params.id)
// you're passing the id via the route: /api/movies/1, /api/movies/20, etc
router.get("/items/:id", (req, res) => {
    // run a SQL query here -> get all movies from my DB
    connect.query(`SELECT * FROM tbl_movies WHERE items_id=${req.params.id}`, function (error, results, fields) {

        if (error) throw error;
        res.json(results);
    });
})

module.exports = router;