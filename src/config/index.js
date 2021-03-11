module.exports = {
    port: parseInt(process.env.PORT || '3000'),
    apiPrefix: '/',
    nodeEnv: (process.env.NODE_ENV || 'development'),
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        cluster: process.env.DB_CLUSTER,
        dbname: process.env.DB_NAME
    }
};