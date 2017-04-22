import DataType from 'sequelize';
import Model from '../sequelize';

const UserLogin = Model.define('UserLogin', {

  name: {
    type: DataType.STRING(50),
    primaryKey: true,
  },

  key: {
    type: DataType.STRING(100),
    primaryKey: true,
  },

  password: {
    type: DataType.STRING(255),
    primaryKey: true,
  },

});

export default UserLogin;
