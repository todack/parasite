const userModel = require('../models/user');

module.exports = Object.freeze({
    findByEmail,
    getPasswordByEmail,
    insert,
    update,
    remove
});

async function getPasswordByEmail({ email }) {
    let res = await userModel.findOne({ email }).select('password').lean().exec();
    return res ? res.password : null;
}

async function findByEmail({ email }) {
    return await userModel.findOne({ email }).lean().exec();
}

async function insert(userDetails) {
    // this thing here returns password, 
    // delete doesn't work.
    return await userModel.create(userDetails);
}

async function update({ email, ...changes }) {
    const result = await userModel.updateOne({ email }, changes).lean().exec();
    return result.nModified > 0 ? { email, ...changes } : null;
}

async function remove({ email }) {
    return await userModel.deleteOne({ email }).lean().exec();
}
