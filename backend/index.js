const express = require("express")
const app = express();


const path = require("path");


require("dotenv").config();

const port = process.env.PORT || 8080;


// middleware
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

//app.use(express.jsons());

// db connection
const dbConnection = require("./config/db");
dbConnection();

// mounting router

// const todoRouter = require("./routers/todoRouter");
// app.use("/api/v1", todoRouter);


app.get("/", (req, res) => {
    res.send("<h1>This is home page   </h1>")

    

})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
}) 