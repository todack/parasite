const { Router } = require('express');

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    res.send('Working...');
})

module.exports = userRoutes;