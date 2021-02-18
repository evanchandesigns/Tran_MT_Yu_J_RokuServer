const express = require('express');
// express router handles incoming requests and directs them where they need to go
// like a traffic cop
const router = express.Router();

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

router.get("/movies", (req, res) => {
    // run a SQL query here -> get all movies from my DB
    // res.json(query result here)
    // echo a msg -> just like PHP
    res.json({ message: "All movies route" });
})

// dynamic route handler that accept a parameter
// this is like $_GET["id"] : (req.params.id)
// you're passing the id via the route: /api/movies/1, /api/movies/20, etc
router.get("/movies/:id", (req, res) => {
    // run a SQL query here -> get all movies from my DB
    // res.json(query result here)
    // echo a msg -> just like PHP
    res.json({ message: "Get 1 movie route", movie: req.params.id });
})

module.exports = router;