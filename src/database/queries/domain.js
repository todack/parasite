const domainModel = require('../models/domain');

module.exports = Object.freeze({
    findByName,
    findById,
    findAll,
    insert,
    update
});

async function findByName({ name }) {
    return await domainModel.findOne({ name }).lean().exec();
}

async function findById({ _id }) {
    return await domainModel.findById(_id).lean().exec();
}

async function findAll(queryData) {
    return await domainModel.find(queryData).lean().exec();
}

async function insert(domainDetails) {
    return await domainModel.create(domainDetails);
}

async function update({ _id, ...changes }) {
    let result = await domainModel.updateOne({ _id }, changes).lean().exec();
    return result.nModified > 0 ? { _id, ...changes } : null;
}
