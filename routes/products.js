const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProductStutus,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.js");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.patch("/:id/:stockStatus", updateProductStutus);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
