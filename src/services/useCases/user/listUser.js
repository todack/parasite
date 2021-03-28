module.exports = function makeListUser({ userQueries }) {
    return async ({ email } = {}) => {
       
        if (!email) {
           throw new Error(`Email must be provided, received: ${email}`);
       }

       const user = await userQueries.findByEmail({ email });

       if (!user) {
           throw new Error(`User with provided email doesn't exist`);
       }
       
       return user;
    }
}