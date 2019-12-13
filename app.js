const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares in express functions that will execute after the routing
app.use(cors());
app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');

});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,  useUnifiedTopology: true }, () => 
    console.log('connected to DB')
);

//how to start listening to the server
app.listen(3000);