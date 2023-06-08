import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, description, price, stock, category_id } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      category_id,
    });

    console.log(newProduct);
    res.send("creating products");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  
};

export const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.params;
    await Product.destroy({
      where: {
        product_id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = (req, res) => {};
