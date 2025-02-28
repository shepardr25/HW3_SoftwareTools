/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 4
*/

const express = require('express');
const path = require('path');
const logger = require('morgan');
const ordersRouter = require('./orders');

const app = express();

// Logger tracks requestss
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Orders route for HW4
app.use('/orders', ordersRouter);

// Catch 404 and return JSON error
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

// Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;