const config = {
    port: parseInt(process.env.PORT || '3000'),
    apiPrefix: '/',
    nodeEnv: (process.env.NODE_ENV || 'development'),
    dbUrl: (process.env.DB_URL || "mongodb://localhost/parasite"),
};

module.exports = config;