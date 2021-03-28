module.exports = function makeAuthUser({ userQueries, compareHash }) {
    return async ({ email, password }) => {
        if (!email) {
            throw new Error(`Email is required to authenticate, received: ${email}`);
        }

        if (!password) {
            throw new Error(`Password is required to authenticate, received: ${password}`);
        }

        let hash = await userQueries.getPasswordByEmail({ email });

        if (!hash) {
            throw new Error(`Authentication failed, user doesn't exist`);
        }

        return await compareHash({ hash, password });
    }
}