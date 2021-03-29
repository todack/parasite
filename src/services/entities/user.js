const { MissingPropertyError, InvalidPropertyError, InternalServerError } = require("../../helpers");

module.exports = function buildMakeUser({ isValidEmail, secretGenerator, hash }){
    return async ({ 
        email,
        password,
        isVerified = false,
        username = `user#${secretGenerator.generate(5)}`,
        accessToken = secretGenerator.generate(25),
        remainingCalls = 0,
        purchases = [],
        isPrivate = false
    }) => {

        // Write down all the business logic, validations, sanitisations here.
        if (!email) {
            throw new MissingPropertyError("email", email);
        }

        if (!isValidEmail({ email })) {
            throw new InvalidPropertyError("email is incorrect", email);
        }

        if (!password) {
            throw new MissingPropertyError("password", password);
        } else {
            password = await hash({ password });
        }

        if (username && username.length < 2) {
            throw new InvalidPropertyError(`username must be atleast 2 characters long`, username);
        }

        if (!accessToken) {
            throw new InternalServerError(`accessToken generation failed`, accessToken);
        }

        if (remainingCalls < 0) {
            throw new InvalidPropertyError(`Remaining calls cannot be negative`, remainingCalls);
        }

        return Object.freeze({
            getEmail: () => email,
            getPassword: () => password,
            getUsername: () => username,
            setUsername: ( newUsername ) => username = newUsername,
            isVerified: () => isVerified,
            getAccessToken: () => accessToken,
            setAccessToken: () => accessToken = secretGen.generate(25),
            getRemainingCalls: () => remainingCalls,
            incRemainingCalls: ({ amount = 1 }) => remainingCalls += amount,
            decRemainingCalls: ({ amount = 1 }) => remainingCalls -= amount,
            getPurchases: () => purchases,
            addPurchase: ({ purchase }) => { purchases.push(purchase) },
            isPrivate: () => isPrivate,
        });
    }
}