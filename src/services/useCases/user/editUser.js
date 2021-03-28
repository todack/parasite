const { makeUser } = require('../../entities');

module.exports = function makeEditUser({ userQueries }) {
    return async ({ email, isVerified, accessToken, ...changes }) => {
        
        if (!email) {
            throw new Error(`Email must be provided, received: ${email}`);
        }

        if (!changes) {
            throw new Error(`Changes either not specified or not allowed`);
        }

        const existing = await userQueries.findByEmail({ email });

        if (!existing) {
            throw new Error(`User with given Email doesn't exist`);
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