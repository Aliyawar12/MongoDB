const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const express = require("express");
const mongoose = require('mongoose');
const taskRoutes = require('./Routes/taskRoute')
const userRoutes = require('./Routes/userRoute')
const CropsRoutes = require('./Routes/CropsRoute')
const app = express();

const PORT = process.env.PORT || 5000;
 
connectDB();

app.get("/" , (req, res) =>{
    res.send("Home Page");
});


connectDB();
app.listen(PORT, () => {
    console.log(`Run Server on ${PORT}`);
});

app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/', userRoutes);
app.use('/', CropsRoutes)
app.use('/', userRoutes); 