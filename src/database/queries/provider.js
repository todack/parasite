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
    return await providerModel.findByIdAndUpdate(_id, changes).lean().exec();
}

async function remove({ _id }) {
    return await providerModel.findByIdAndDelete(_id).lean().exec();
}