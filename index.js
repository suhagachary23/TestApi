const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb://localhost/TestApi')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/InsertApi', require('./routes/InsertApi'));
app.use('/api/ScoreApi', require('./routes/ScoreApi'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));