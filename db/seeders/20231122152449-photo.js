'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      img: 'https://almode.ru/uploads/posts/2021-06/1624956770_53-almode_ru-p-kvartira-v-temnom-stile-55.jpg',
      placeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://федерация.moscow-city-towers.ru/images/aparts/arenda/61-1.jpg',
      placeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://topaddress.ae/wp-content/uploads/2023/03/63fd9431bbf0a5c9ea8a76bf_Design_Quarter_by_Meraas_interior_1-1200x849.webp',
      placeId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://i.pinimg.com/originals/90/c6/af/90c6af7e5a6085e6cb296c6ac30a9a49.jpg',
      placeId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://i.pinimg.com/originals/5e/62/b7/5e62b7617804ccb6e2a185812e5a5f8d.jpg',
      placeId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5bc8c426a9ab957d5c0956f2/1654362153538-4X2G8GNHNH2YBROPC3JV/190511_7577-HDR.jpg',
      placeId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://i.pinimg.com/originals/52/af/0d/52af0d4672d21a82745807ef762711fe.jpg',
      placeId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F12%2Fhome-alone-house-airbnb-book-stay-one-night-only-2.jpg?cbr=1&q=90',
      placeId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/1356/7869/files/off-grid-itHouse-airbnb-pioneertown.jpg?v=1579903280',
      placeId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod/images/airbnb-calculator-lead-1502467692.jpg?crop=0.671xw:1.00xh;0.329xw,0&resize=1200:*',
      placeId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Photos', null, {});
    
  }
};
