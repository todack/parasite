const userModel = require('../models/user');

module.exports = Object.freeze({
    findByEmail,
    insert,
    update,
    remove
});

async function findByEmail({ email }) {
    return await userModel.findOne({ email }).lean().exec();
}

async function insert(userDetails) {
    return await userModel.create(userDetails);
}

async function update({ email, ...changes }) {
    return await userModel.updateOne({ email }, changes).lean().exec();
}

async function remove({ email }) {
    return await userModel.deleteOne({ email }).lean().exec();
}
