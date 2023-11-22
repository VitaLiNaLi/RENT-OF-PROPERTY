'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Place}) {
      this.belongsTo( User, {foreignKey: 'userFavoriteId'})
      this.belongsTo( Place, {foreignKey: 'userFavoriteId'})
      // define association here
    }
  }
  Favorite.init({
    userFavoriteId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "cascade"
    },
    placeId: {
      allowNull: false,
      type: DataTypes.INTEGER,  references: {
        model: "Places",
        key: "id",
      },
      onDelete: "cascade"
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};