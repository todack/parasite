module.exports = async function gatherAndEvaluateResults({ targetProviders, request }) {
    return {
        best: "This was expected.",
        top: [
            "This was something",
            "This is something",
            "This was something"
        ]
    }
}