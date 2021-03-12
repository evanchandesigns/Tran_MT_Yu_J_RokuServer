const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    console.log('incoming request');
    console.log(port);
    next();
})

app.use("/roku", require("./routes/api"));


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})