const { makeUser } = require('../../entities');
const { MissingPropertyError, NotFoundError } = require('../../../helpers');

module.exports = function makeEditUser({ userQueries }) {
    return async ({ email, isVerified, accessToken, ...changes }) => {
        
        if (!email) {
            throw new MissingPropertyError("email", email);
        }

        if (!changes) {
            throw new MissingPropertyError(null, value);
        }

        const existing = await userQueries.findByEmail({ email });

        if (!existing) {
            throw new NotFoundError("user", value);
        }

        // Always update the user throught its consturctor as it provides validation.
        const updatedUser = await makeUser({ ...existing, ...changes });

        return userQueries.update({
            email: updatedUser.getEmail(),
            password: updatedUser.getPassword(),
            isVerified: updatedUser.getVerified(),
            username:  updatedUser.getUsername(),
            accessToken: updatedUser.getAccessToken(),
            remainingCalls: updatedUser.getRemainingCalls(),
            purchases: updatedUser.getPurchases(),
            isPrivate: updatedUser.isPrivate()
        });
    }
}