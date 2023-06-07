import express from 'express'
import productsRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'

const app = express()

//middlewares
app.use(express.json())

app.use(productsRoutes)
app.use(categoriesRoutes)

export default app