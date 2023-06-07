import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Category } from './Category.js';

export const Product = sequelize.define('Product', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER
  })

  Product.belongsTo(Category, { foreignKey: 'category_id' });
  