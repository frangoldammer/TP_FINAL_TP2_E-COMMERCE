import Sequelize from 'sequelize'

export const sequelize = new Sequelize("siu7db",'root', 'MrRC7SCYrZVZHeJCyzzh',{
    host: 'localhost',
    dialect: 'mysql'
})