const requestModel = require('../models/request');

module.exports = Object.freeze({
    insert,
    update,
    findById
});

async function insert(requestDetails) {
    return await requestModel.create(requestDetails);
}

async function update({ _id, ...changes }) {
    const result = await requestModel.updateOne({ _id }, changes).lean().exec();
    return result.nModified > 0 ? { _id, ...changes } : null;
}

async function findById({ _id }) {
    return await requestModel.findById(_id).lean().exec();
}
