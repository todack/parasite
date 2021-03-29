module.exports = function makeRemoveUser({ userQueries }) {
    return async ({ email }) => {
        if (!email) {
            throw new MissingPropertyError("email", email);
        }

        const user = await userQueries.findByEmail({ email });

        if (!user) {
            throw new NotFoundError("user", email);
        }

        return userQueries.remove({ email });
    }
}