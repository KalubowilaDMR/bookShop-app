const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/book-routes");
require('dotenv').config();
const app = express();

//Middleware handller
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose.connect(process.env.MONGODB_SERVER)
.then(() => console.log("Connected to Databse"))
.then(() => {
    app.listen(process.env.SERVER_PORT);
    console.log("PORT" + process.env.SERVER_PORT);
}).catch((err) => console.log(err));


app.all("*", (req, res) => {
    res.status(404).send({
        error : "Invalid Search Resources"
    });
});