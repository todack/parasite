module.exports = function buildMakeUser({ isValidEmail, secretGen }){
    return ({ 
        email,
        username,
        accessCode = secretGen.generate(),
        remainingCalls = 0,
        purchases = [],
        isPrivate = false
    }) => {

        // Write down all the business logic, validations, sanitisations here.

        if (!isValidEmail({ email })) {
            throw new Error(`Email is invalid, received: ${email}`);
        }

        if (!username && username.length < 2) {
            throw new Error(`Username must be atleast 2 characters long, received: ${username}`);
        }

        if (!accessCode) {
            throw new Error(`Access code generation failed, received: ${accessCode}`);
        }

        if (remainingCalls < 0) {
            throw new Error(`Remaining calls cannot be negative, received: ${remainingCalls}`);
        }

        return Object.freeze({
            getEmail: () => email,
            getUsername: () => username,
            setUsername: ( newUsername ) => username = newUsername,
            getAccessCode: () => accessCode,
            setAccessCode: () => accessCode = accessCodeGen.generate(),
            getRemainingCalls: () => remainingCalls,
            incRemainingCalls: ({ amount = 1 }) => remainingCalls += amount,
            decRemainingCalls: ({ amount = 1 }) => remainingCalls -= amount,
            getPurchases: () => purchases,
            addPurchase: ({ purchase }) => { purchases.push(purchase) },
            isPrivate: () => isPrivate,
        });
    }
}