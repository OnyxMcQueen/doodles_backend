//DEPENDENCIES
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const doodleController = require('./controllers/doodleController');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to Pencil Palette!');
});

app.use('/doodles', doodleController);

app.get('*', (req, res) => {
    res.send('Page not Found :(');
})

//EXPORT
module.exports = app;