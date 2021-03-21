// Controllers return an httpResponse with headers(optional), body and statusCode.

module.exports = function makeGetService({ someAlgorithm }) {
    return ( httpRequest ) => {

        // Parse the request to be useful to someAlgorithm.
        // Send the response.

        let httpResponse = {}

        httpResponse.body = someAlgorithm();
        httpResponse.statusCode = 200;

       return httpResponse;
    }
}