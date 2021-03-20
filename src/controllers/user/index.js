const { 
    addUser, 
    listUser, 
    editUser, 
    removeUser 
} = require('../../services/user');

const makeDeleteUser = require('./deleteUser');
const makeGetUser = require('./getUser');
const makePutUser = require('./putUser');
const makePatchUser = require('./patchUser');

const deleteUser = makeDeleteUser({ removeUser });
const getUser = makeGetUser({ listUser });
const putUser = makePutUser({ addUser });
const patchUser = makePatchUser({ editUser });

const userController = Object.freeze({
    deleteUser,
    getUser,
    putUser,
    patchUser
});

module.exports = userController;