"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favorite, User, Photo, Category }) {
      this.hasMany(Favorite, { foreignKey: "placeId" });
      this.hasMany(Photo, { foreignKey: "placeId" });
      this.belongsTo(Category, { foreignKey: "categoryId" });
      this.belongsTo(User, { foreignKey: "userPlaceId" });
      // define association here
    }
  }
  Place.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "cascade",
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      coordinates: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      userPlaceId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Place",
    }
  );
  return Place;
};
