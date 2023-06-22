const express = require("express");
const productRouter = require("./app/product_v2/routes");
const logger = require("morgan");
const app = express();
const path = require("path");

// membuat logger
app.use(logger("dev"));
// menangani req body
app.use(express.urlencoded({ extended: true }));

// menangani req berupa json
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1", productRouter);

app.use((req, res) => {
    res.status(404);
    res.send({
        status: "Failed",
        message: "resource" + req.originalUrl + "not found",
    });
});

app.listen(3000, () =>
    console.log("server running in : http://localhost:3000")
);
