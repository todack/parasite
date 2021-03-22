const { Router } = require('express');
const makeCallback = require('../helpers/makeCallback');
const {
    postUser,
    getUser,
    patchUser,
    deleteUser
} = require('../controllers/user');

const userRoutes = Router();

userRoutes.post('/', makeCallback(postUser));

// This may change after enabling authentication.
userRoutes.get('/:email', makeCallback(getUser));
userRoutes.patch('/:email', makeCallback(patchUser));
userRoutes.delete('/:email', makeCallback(deleteUser));

module.exports = userRoutes;