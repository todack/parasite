const { makeUser } = require('../../entities')

module.exports = function makeAddUser({ userQueries }) {
    return async ( userData )=> {
        const user = makeUser(userData);
        const exists = await userQueries.findByEmail({ email: user.getEmail() });

        if (exists) {
            throw new Error(`User with given email already exists`);
        }

        return userQueries.insert({
            email: user.getEmail(),
            username: user.getUsername(),
            accessCode: user.getAccessCode(),
            remainingCalls: user.getRemainingCalls(),
            purchases: user.getPurchases(),
            isPrivate: user.isPrivate()
        });
    }
}