import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../controllers/categories.controllers.js";

const router = Router();

router.get("/categories", getCategories);
router.post("/categories", createCategory);
router.put("/categories/:category_id", updateCategory);
router.delete("/categories/:category_id", deleteCategory);
router.get("/categories/:category_id", getCategory);

export default router;
