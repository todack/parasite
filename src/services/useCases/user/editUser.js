module.exports = function makeEditUser({ userQueries }) {
    return async ({ email, ...changes }) => {
        
        if (!email) {
            throw new Error(`Email must be provided to update, received: ${email}`);
        }

        if (!changes) {
            throw new Error(`Changes either not specified or not allowed`);
        }

        const existing = await userQueries.findByEmail({ email });

        if (!existing) {
            throw new Error(`User with given Email doesn't exist`);
        }

        return await userQueries.update({ ...existing, ...changes });
    }
}