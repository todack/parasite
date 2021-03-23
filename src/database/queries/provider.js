const providerModel = require('../models/provider');

module.exports = Object.freeze({
    findAll,
    findById,
    insert,
    update,
    remove
});

async function findAll(queryData) {
    return await providerModel.find(queryData).lean().exec();
}

async function findById({ _id }) {
    return await providerModel.findById(_id).lean().exec();
}

async function insert(providerDetails) {
    return await providerModel.create(providerDetails);
}

async function update({ _id, ...changes }) {
    const result = await providerModel.updateOne({ _id }, changes).lean().exec();
    return result.nModified > 0 ? { _id, ...changes } : null;
}

async function remove({ _id }) {
    return await providerModel.deleteOne({ _id }).lean().exec();
}