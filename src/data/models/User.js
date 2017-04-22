import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(50),
  },

  password: {
    type: DataType.STRING(255),
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  emailConfirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

}, {

  indexes: [
    { fields: ['email'] },
  ],

});

export default User;
