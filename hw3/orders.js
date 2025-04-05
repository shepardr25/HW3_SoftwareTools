/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 5
*/

const express = require('express');
const router = express.Router();
const db = require('./dbms');

router.post('/', (req, res) => {
    const month = req.body.month.toLowerCase();
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const monthNumber = months.indexOf(month) + 1;

    const query = `SELECT * FROM orders WHERE month = ${monthNumber}`;

    db.dbquery(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
