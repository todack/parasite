const { makeUser } = require('../../entities');

module.exports = function makeEditUser({ userQueries }) {
    return async ({ email, ...changes }) => {
        
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
        const updatedUser = makeUser({...existing, ...changes, accessCode: null });

        return userQueries.update({
            email: updatedUser.getEmail(),
            username:  user.getUsername(),
            accessCode: user.getAccessCode(),
            remainingCalls: user.getRemainingCalls(),
            purchases: user.getPurchases(),
            isPrivate: user.isPrivate()
        });
    }
}