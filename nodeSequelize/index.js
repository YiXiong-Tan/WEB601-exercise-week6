const sequelize = require("./util/database");

// models
const Customer = require("./models/customer");
const Order = require("./models/order");

sequelize.sync().then((result) => {
    console.log(result);
}). catch((err) => {
    console.log(err);
});