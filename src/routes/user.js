const { Router } = require('express');
const makeCallback = require('../helpers/makeCallback');
const {
    putUser,
    getUser,
    patchUser,
    deleteUser
} = require('../controllers/user');

const userRoutes = Router();

userRoutes.put('/', makeCallback(putUser));

// This may change after enabling authentication.
userRoutes.get('/:email', makeCallback(getUser));
userRoutes.patch('/:email', makeCallback(patchUser));
userRoutes.delete('/:email', makeCallback(deleteUser));

module.exports = userRoutes;