const { 
    addUser, 
    listUser, 
    editUser, 
    removeUser 
} = require('../../services/useCases/user');

const makeDeleteUser = require('./deleteUser');
const makeGetUser = require('./getUser');
const makePutUser = require('./putUser');
const makePatchUser = require('./patchUser');

const deleteUser = makeDeleteUser({ removeUser });
const getUser = makeGetUser({ listUser });
const putUser = makePutUser({ addUser });
const patchUser = makePatchUser({ editUser });

module.exports = Object.freeze({
    deleteUser,
    getUser,
    putUser,
    patchUser
});
