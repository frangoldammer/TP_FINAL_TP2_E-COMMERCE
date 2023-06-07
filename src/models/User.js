import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(18),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(18),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    first_name: DataTypes.STRING(15),
    last_name: DataTypes.STRING(20),
  });