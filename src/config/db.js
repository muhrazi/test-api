const sequelize = require("sequelize");

const db = new sequelize("toko_jaya", "root", "", {
dialect: "mysql"
});

db.sync({});

module.exports = db;
