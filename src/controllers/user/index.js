const { 
    addUser, 
    listUser, 
    editUser, 
    removeUser 
} = require('../../services/useCases/user');

const makeDeleteUser = require('./deleteUser');
const makeGetUser = require('./getUser');
const makePatchUser = require('./patchUser');
const makePostUser = require('./postUser');

const deleteUser = makeDeleteUser({ removeUser });
const getUser = makeGetUser({ listUser });
const postUser = makePostUser({ addUser });
const patchUser = makePatchUser({ editUser });

module.exports = Object.freeze({
    deleteUser,
    getUser,
    postUser,
    patchUser
});
