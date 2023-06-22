const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    database: "eduwork-v2",
    username: "root",
    password: "root",
    dialect: "mysql",
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

module.exports = sequelize;
