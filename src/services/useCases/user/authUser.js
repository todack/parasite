const { MissingPropertyError, NotFoundError } = require('../../../helpers');

module.exports = function makeAuthUser({ userQueries, compareHash }) {
    return async ({ email, password }) => {
        if (!email) {
            throw new MissingPropertyError("email", email);
        }

        if (!password) {
            throw new MissingPropertyError("password", password);
        }

        let hash = await userQueries.getPasswordByEmail({ email });

        if (!hash) {
            throw new NotFoundError("user", email);
        }

        return await compareHash({ hash, password });
    }
}