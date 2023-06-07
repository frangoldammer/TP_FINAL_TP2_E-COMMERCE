import {Router} from 'express'
import {getCategory, createCategory} from '../controllers/categories.controllers.js'

const router = Router()

router.get('/categories', getCategory)
router.post('/categories', createCategory)

export default router