const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 5002;
app.use(express.json());
app.use("/api/contact",require("./Routes/contactRoutes"));
app.use(errorHandler)

app.listen(port,()=>{
    console.log('Server is Running on post' ,port);
});
