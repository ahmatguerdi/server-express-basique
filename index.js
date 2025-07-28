//  on importe les différents modules et routes
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const products_routes = require("./routes/products.js");

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(Error));

  // middleware
app.use(express.json());

// La route principale
app.use("/api/products", products_routes);
