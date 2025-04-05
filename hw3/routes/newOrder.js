/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 5
*/

const express = require('express');
const router = express.Router();
const db = require('../dbms');

router.post('/', (req, res) => {
    const { toppingId, quantity, notes, month, year } = req.body;

    const query = `
        INSERT INTO orders (T_ID, quantity, notes, month, year)
        VALUES (${toppingId}, ${quantity}, '${notes}', ${month}, ${year})
    `;

    db.dbquery(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Insert failed' });
        } else {
            res.json({ message: 'Order placed!' });
        }
    });
});

module.exports = router;