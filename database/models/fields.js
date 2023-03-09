'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fields.init({
    fieldName: DataTypes.STRING,
    cTypeId: DataTypes.UUID,
    attributes: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Fields',
  });
  return Fields;
};