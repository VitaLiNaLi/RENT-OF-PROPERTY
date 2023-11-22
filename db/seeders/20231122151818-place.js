'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [{
      name: 'Комната для студента',
      categoryId: 1,
      price: 8000,
      description: 'Сдаю комнату в хорошем районе рядом с медицинским университетом.',
      coordinates: 'улица Пушкина дом 5',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Комната 10м2',
      categoryId: 1,
      price: 10000,
      description: 'Сдам комнату в центре. Без животных!',
      coordinates: 'Чиллим в центре',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Комната в коммуналке',
      categoryId: 1,
      price: 6000,
      description: 'Не советую тут жить, только хранить вещи))',
      coordinates: 'Такое такое',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Квартира на Лиговском',
      categoryId: 2,
      price: 18000,
      description: 'Сдам однокомнатную квартиру.',
      coordinates: 'Лиговской проспект',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Квартира в ЖК Эльбрус',
      categoryId: 2,
      price: 25000,
      description: 'Сдается двухкомнатная квартира 70 кв м',
      coordinates: 'ЖК Эльбрус',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Квартира для тус',
      categoryId: 2,
      price: 13000,
      description: 'Голая однокомнатная квартира на побухать',
      coordinates: 'проспект пьяниц 13',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Квартира в премиум ЖК',
      categoryId: 2,
      price: 100000,
      description: 'Двухкомнатная квартира в лучшем ЖК на планете',
      coordinates: 'Райский проспект 7',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Дом в лесу',
      categoryId: 3,
      price: 25000,
      description: 'Сдам прекрасный дом на природе',
      coordinates: 'ЛЕС',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Коттедж',
      categoryId: 3,
      price: 150000,
      description: 'Коттедж на террирории миллион соток. На территории также имеется: гараж и баня.',
      coordinates: '',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Дача в пригороде',
      categoryId: 3,
      price: 20000,
      description: 'Сдается дача на шашлычки и бухич',
      coordinates: 'Пригород',
      userPlaceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Places', null, {});
    
  }
};
