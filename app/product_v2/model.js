const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize");

const Product = sequelize.define("product", {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

sequelize
    .sync()
    .then(() => {
        console.log("Product table created successfully!");
    })
    .catch((error) => {
        console.error("Unable to create table : ", error);
    });

module.exports = Product;
