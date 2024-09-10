const productService = require('../services/product');

const showProducts = async (req, res) => {
  try {
    const product = await productService.find();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

const showProductById = async (req, res) => {
  try {
    const product = await productService.findById(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.update(id, req.body);
    return res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.create(req.body);

    res.status(201).send(product);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.delete(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong:\n' + err.message });
  }
};

module.exports = {
  showProducts,
  showProductById,
  updateProduct,
  createProduct,
  deleteProduct,
};
