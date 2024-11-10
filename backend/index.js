const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

connectToMongo();
const app = express();
const port = 4000 || 5000;

// if we need to use (req.body) then we need to write this line
app.use(cors());    //you can not reverse api direct from browser this why we need to use core package in express
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello world')
  })
//Avilable routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// app.use('/test', require('./routes/notes'));
// app.get('/test', (req, res) => {
//     // Handle user creation
//     console.log("request user",req );
//   });



app.listen(port, () => {
    console.log(`CloudNote Backend listening at http://localhost:${port}`)
})


