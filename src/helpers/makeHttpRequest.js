module.exports = function makeHttpRequest({ body, query, params }) {
    return {
        body,
        query,
        params
    }
}