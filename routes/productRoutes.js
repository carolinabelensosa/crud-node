const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers")

router.get("/", productControllers.productList);
router.get("/newProduct", productControllers.productForm);
router.post("/newProduct", productControllers.newProduct);
router.get("/detail/:id", productControllers.productDetail);
router.get("/editProduct/:id", productControllers.editForm);
router.put("/editProduct/:id", productControllers.editProduct);
router.delete("/delete/:id", productControllers.deleteProduct);

module.exports = router;