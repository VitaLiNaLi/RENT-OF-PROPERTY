'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Place}) {
      this.belongsTo(Place, {foreignKey : "placeId"})
      // define association here
    }
  }
  Photo.init({
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    placeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Places",
        key: "id",
      },
      onDelete: "cascade"
    },
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};