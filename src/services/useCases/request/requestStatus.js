module.exports = function makeRequestStatus({ requestQueries }) {
    return ({ _id }) => {
        return requestQueries.findById({ _id });
    }
}