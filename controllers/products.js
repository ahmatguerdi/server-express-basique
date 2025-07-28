// const products = require("../data.js");
const Product = require("../models/Product.js");

const getProducts = (req, res) => {
  Product.find({})
    .then((result) => res.status(200).json({ msg: "Toute la liste de la base de données produit", result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json({ msg: "Voici le produit recherché", result }))
    .catch((error) =>
      res.status(404).json({ msg: "Aucun résultat trouvé!", error })
    );
};

const createProduct = (req, res) => {
  Product.create(req.body)
    .then((result) =>
      res.status(200).json({ msg: "Produit crée avec succès!", result })
    )
    .catch((error) =>
      res.status(500).json({ msg: "Échec de la création du produit!", error })
    );
};

const updateProductStutus = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.id }, { stockStatus: req.params.stockStatus },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((result) =>
      res.status(200).json({ msg: "Le status du produit mis à jour avec succès!", result })
    )
    .catch((error) =>
      res.status(404).json({ msg: "Échec de la mise à jour!", error })
    );
};

const updateProduct = (req, res) => {
  const {productName, price} = req.body;
  Product.findOneAndUpdate({ _id: req.params.id }, {productName, price}, {
    new: true,
    runValidators: true,
  })
    .then((result) =>
      res.status(200).json({ msg: "Nom et Prix du produit sont mis à jour avec succès!", result })
    )
    .catch((error) =>
      res.status(404).json({ msg: "Échec de la mise à jour!", error })
    );
};

const deleteProduct = (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id })
    .then((result) =>
      res.status(200).json({
        msg: "Produit supprimé de la base de données avec succès",
        result,
      })
    )
    .catch((error) =>
      res.status(404).json({ msg: "Aucun produit trouvé pour la suppression!" })
    );
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProductStutus,
  updateProduct,
  deleteProduct,
};
