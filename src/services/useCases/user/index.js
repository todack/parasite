const makeAddUser = require('./addUser');
const makeListUser = require('./listUser');
const makeEditUser = require('./editUser');
const makeRemoveUser = require('./removeUser');

const { userQueries } = require('../../../database');

// ADD other external dependencies here.

const addUser = makeAddUser({ userQueries });
const listUser = makeListUser({ userQueries });
const editUser = makeEditUser({ userQueries });
const removeUser = makeRemoveUser({ userQueries });

const userService = Object.freeze({
    addUser, 
    listUser, 
    editUser,
    removeUser
});

module.exports = userService;


