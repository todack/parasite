const domainModel = require('../models/domain');

module.exports = Object.freeze({
    findByName,
    findById,
    findAll,
    insert,
    update
});

async function findByName({ name }) {
    return await domainModel.find({ name }).lean().exec();
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
    return await findByIdAndUpdate(_id, changes).lean().exec();
}
