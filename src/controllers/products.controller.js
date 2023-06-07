import {Product} from '../models/Product.js'

export const getProduct = (req, res) => {
    
}

export const createProduct = async (req, res) => {
    const {name, description, price, stock, category_id} = req.body


    const newProduct = await Product.create({
        name,
        description,
        price,
        stock,
        category_id
    })

    console.log(newProduct)
    res.send('creating products')
}