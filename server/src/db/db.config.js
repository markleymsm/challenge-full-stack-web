module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "4219",
    DB: "challenge-full-stack-web",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};