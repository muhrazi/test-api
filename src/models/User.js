const Sequelize = require("sequelize");
const db = require("../config/db");

const User= db.define(
    "produk",
    {
        
        name: {type: Sequelize.STRING},       
        product: {type: Sequelize.STRING},
        stock: {type: Sequelize.INTEGER},
    },
    {
        freezeTableName: true
    }
)

module.exports = User;