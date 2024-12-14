const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectToDatabase();

app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests



app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.use('/users',userRoutes);


module.exports = app;