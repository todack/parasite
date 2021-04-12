module.exports = function makeHttpRequest({ body, query, params, file }) {
    return {
        body,
        query,
        params,
        file
    }
}