const router = require("express").Router();
const connection = require("../../config/mysql");
const productController = require("./controller");
const multer = require("multer");
const upload = multer({ dest: "uploads" });

// ex: http://localhost:3000/?page=10&total=100
router.get("/product", productController.index);
router.get("/product/:id", productController.view);
router.post("/product/", upload.single("image"), productController.store);
router.post("/product/:id", upload.single("image"), productController.update);
router.post("/product/:id", upload.single("image"), productController.destroy);

module.exports = router;
