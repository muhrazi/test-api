import Sequelize from 'sequelize';


const sequelize = new Sequelize('toko', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'
    });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  address: {
    type: Sequelize.STRING
  }
},{
  sequelize,
});
sequelize.sync({alter: true})

export { User }