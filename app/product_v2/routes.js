const router = require("express").Router();
// const multer = require("multer");
// const upload = multer({ dest: "uploads" });
const productControllerV2 = require("./controller");

router.post("/products", productControllerV2.store);
router.get("/products", productControllerV2.view);
router.put("/products/:id", productControllerV2.update);
router.delete("/products/:id", productControllerV2.destroy);

module.exports = router;
