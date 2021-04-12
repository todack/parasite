module.exports = function makeRequestStatus({ }) {
    return ({ _id }) => {
        return {
            status: 'done',
            result: {
                best: "This is expected.",
                metrics: {
                    auc: 0.99,
                    accuracy: 0.86,
                    precision: 0.23
                },
                providers: [
                    { name: 'Google', value: 'This was expected.' },
                    { name: 'Microsoft', value: 'This is expected.' },
                    { name: 'Yandex', value: 'This is expected.' }
                ]
            }
        }
    }
}