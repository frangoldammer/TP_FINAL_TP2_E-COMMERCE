import { Category } from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await Category.create({
      name,
    });

    res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = (req,res)=> {

} 

export const deleteCategory = async (req,res)=> {
    try {
        const { category_id } = req.params;
        await Category.destroy({
          where: {
            category_id,
          },
        });
        res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
} 

export const getCategory = (req,res)=> {
    
} 


