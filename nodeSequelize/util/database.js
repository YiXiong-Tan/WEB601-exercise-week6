const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize_youtube","root","root", {
    dialect :"mysql",
    host: "localhost"
});

module.exports = sequelize;