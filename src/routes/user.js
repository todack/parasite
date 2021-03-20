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
userRoutes.get('/:id', makeCallback(getUser));
userRoutes.patch('/:id', makeCallback(patchUser));
userRoutes.delete('/:id', makeCallback(deleteUser));

module.exports = userRoutes;