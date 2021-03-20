const { Router } = require('express');
const makeCallback = require('../helpers/makeCallback');

const userRoutes = Router();

userRoutes.put('/', makeCallback(putUser));
userRoutes.get('/:id', makeCallback(getUser));
userRoutes.patch('/:id', makeCallback(patchUser));
userRoutes.delete('/:id', makeCallback(deleteUser));

module.exports = userRoutes;