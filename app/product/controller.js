const connection = require("../../config/mysql");
const fs = require("fs");
const path = require("path");

const index = (req, res) => {
    connection.query(
        {
            sql: "select * from products",
        },
        _response(res)
    );
};

const view = (req, res) => {
    connection.query(
        {
            sql: "select * from products where id = ?",
            values: [req.params.id],
        },
        _response(res)
    );
};

const destroy = (req, res) => {
    connection.query(
        {
            sql: "delete from products where id = ?",
            values: [req.params.id],
        },
        _response(res)
    );
};

const store = (req, res) => {
    const { nama, stok } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(
            __dirname,
            "../../uploads",
            image.originalname
        );
        fs.renameSync(image.path, target);
    }
    connection.query(
        {
            sql: "insert into products (nama,stok,image_url) values (?,?,?)",
            values: [
                nama,
                stok,
                `http:localhost://3000/public/${image.originalname}`,
            ],
        },
        _response(res)
    );
};

const update = (req, res) => {
    const { nama, stok } = req.body;
    const image = req.file;
    let sql = "";
    let values = [];
    if (image) {
        const target = path.join(
            __dirname,
            "../../uploads",
            image.originalname
        );
        fs.renameSync(image.path, target);
        sql = "update products set nama=? , stok=?, image_url=? where id=?";
        values = [
            nama,
            stok,
            `http:localhost://3000/public/${image.originalname}`,
            req.params.id,
        ];
    } else {
        sql = "update products set nama=? , stok=?, image_url=? where id=?";
        values = [nama, stok, req.params.id];
    }
    connection.query(
        {
            sql,
            values,
        },
        _response
    );
};

const _response = (res) => {
    return (error, result) => {
        if (error) {
            res.send({
                status: "failed",
                response: "failed to fetch",
            });
        } else {
            res.send({
                status: "success",
                response: result,
            });
        }
    };
};

module.exports = { index, view, store, update, destroy };
