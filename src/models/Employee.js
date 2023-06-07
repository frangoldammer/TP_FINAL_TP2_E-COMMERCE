import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {User} from './User.js'

export const Employee = sequelize.define('Employee', {
    hire_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  });

Employee.belongsTo(User, { foreignKey: 'user_id', as: 'user' });