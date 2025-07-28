// On importe le module express 
// et les différentes 
// méthodes qui sont dans le (../controllers/products.js)
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

// On rend disponible les routes de chacune des méthodes dans le projet 
// càd
// On les exportent
module.exports = router;
