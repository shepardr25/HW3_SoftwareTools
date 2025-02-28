/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 4
*/

const express = require('express');
const router = express.Router();

const orders = {
    Jan: [
        { topping: 'Cherry', quantity: 1 },
        { topping: 'Plain', quantity: 25 },
        { topping: 'Chocolate', quantity: 2 }
    ],
    Feb: [
        { topping: 'Plain', quantity: 3 },
        { topping: 'Chocolate', quantity: 26 },
        { topping: 'Cherry', quantity: 4 }
    ],
    Mar: [
        { topping: 'Cherry', quantity: 5 },
        { topping: 'Plain', quantity: 27 },
        { topping: 'Chocolate', quantity: 6 }
    ],
    Apr: [
        { topping: 'Plain', quantity: 7 },
        { topping: 'Chocolate', quantity: 28 },
        { topping: 'Cherry', quantity: 8 }
    ],
    May: [
        { topping: 'Cherry', quantity: 9 },
        { topping: 'Plain', quantity: 29 },
        { topping: 'Chocolate', quantity: 10 }
    ],
    Jun: [
        { topping: 'Plain', quantity: 11 },
        { topping: 'Chocolate', quantity: 30 },
        { topping: 'Cherry', quantity: 12 }
    ],
    Jul: [
        { topping: 'Cherry', quantity: 13 },
        { topping: 'Plain', quantity: 31 },
        { topping: 'Chocolate', quantity: 14 }
    ],
    Aug: [
        { topping: 'Plain', quantity: 15 },
        { topping: 'Chocolate', quantity: 32 },
        { topping: 'Cherry', quantity: 16 }
    ],
    Sep: [
        { topping: 'Cherry', quantity: 17 },
        { topping: 'Plain', quantity: 33 },
        { topping: 'Chocolate', quantity: 18 }
    ],
    Oct: [
        { topping: 'Plain', quantity: 19 },
        { topping: 'Chocolate', quantity: 34 },
        { topping: 'Cherry', quantity: 20 }
    ],
    Nov: [
        { topping: 'Cherry', quantity: 21 },
        { topping: 'Plain', quantity: 35 },
        { topping: 'Chocolate', quantity: 22 }
    ],
    Dec: [
        { topping: 'Plain', quantity: 23 },
        { topping: 'Chocolate', quantity: 36 },
        { topping: 'Cherry', quantity: 24 }
    ]
};

router.post('/', (req, res) => {
    const month = req.body.month;
    if (orders[month]) {
        res.json(orders[month]);
    } else {
        res.status(404).json({ error: 'No orders found for this month' });
    }
});

module.exports = router;
