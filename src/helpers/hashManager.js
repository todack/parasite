const argon2 = require('argon2');

module.exports = Object.freeze({
    hash, 
    compareHash
});

async function hash({ password }) {
    return await argon2.hash(password);
}

async function compareHash({ hash, password }) {
    return await argon2.verify(hash, password);
}