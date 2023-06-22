const Product = require("./model");
const sequelize = require("../../config/sequelize");
// const fs = require("fs");
// const path = require("path");

const store = async (req, res) => {
    try {
        // const { title, author, release_date, subject } = req.body;
        const { nama, harga, stok, status } = req.body;

        await Product.sync();

        const result = await Product.create({
            nama,
            harga,
            stok,
            status,
        });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};
const view = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const { nama, harga, stok, status } = req.body;

        await Product.sync();

        const result = await Product.update(
            {
                nama,
                harga,
                stok,
                status,
            },
            {
                where: {
                    id: id,
                },
            }
        );
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};
const destroy = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.sync();
        const result = await Product.destroy({
            where: {
                id: id,
            },
        });
        // res.send(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { store, view, update, destroy };
