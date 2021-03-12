const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// this catches every route request -  every time you change your location bar
// this function reacts and intercepts the route request
app.use((req, res, next) => {
    console.log('incoming request');
    console.log(port);
    // next is the original route request ie. /api/users
    next(); // => send the user to the route they requested
})

// use the API route file to handle API routes (/api/users, /api/:user/:id, etc)

app.use("/roku", require("./routes/api"));

// run the app at the PORT
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})