import { Category } from "../models/Category.js";

export const getCategory = (req, res) => {
    res.send('getting categories')
}

export const createCategory = async (req, res) => {
    const {name} = req.body

    const newCategory = await Category.create({
        name
    })

    console.log(newCategory)
    res.send('creating category')
}