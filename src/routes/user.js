const { Router } = require('express');
const makeCallback = require('../helpers/makeCallback');
const { authHandler } = require('../middlewares');
const {
    postUser,
    getUser,
    patchUser,
    deleteUser
} = require('../controllers/user');

const userRoutes = Router();

userRoutes.post('/', makeCallback(postUser));

// This may change after enabling authentication.
userRoutes.get('/:email', authHandler, makeCallback(getUser));
userRoutes.patch('/:email', authHandler, makeCallback(patchUser));
userRoutes.delete('/:email', authHandler, makeCallback(deleteUser));

module.exports = userRoutes;