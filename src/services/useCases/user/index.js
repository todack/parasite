const makeAddUser = require('./addUser');
const makeListUser = require('./listUser');
const makeEditUser = require('./editUser');
const makeRemoveUser = require('./removeUser');
const makeAuthUser = require('./authUser');
const { userQueries } = require('../../../database');
const { compareHash } = require('../../../helpers');

// ADD other external dependencies here.

const addUser = makeAddUser({ userQueries });
const listUser = makeListUser({ userQueries });
const editUser = makeEditUser({ userQueries });
const removeUser = makeRemoveUser({ userQueries });
const authUser = makeAuthUser({ userQueries, compareHash });

const userService = Object.freeze({
    addUser, 
    listUser, 
    editUser,
    removeUser,
    authUser
});

module.exports = userService;


