'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Favorites', [
        {
          userFavoriteId: 1,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userFavoriteId: 2,
          placeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userFavoriteId: 3,
          placeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userFavoriteId: 4,
          placeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userFavoriteId: 5,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Favorites', null, {});
     
  }
};
