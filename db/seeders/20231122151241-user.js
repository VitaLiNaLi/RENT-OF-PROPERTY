"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Дмитрий",
          sName: "Федоров",
          email: "reyigubeuseu-8639@yopmail.com",
          password: "secret1",
          avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
          tel: "89045674532",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Лев",
          sName: "Фролов",
          email: "kecrettupigra-7087@yopmail.com",
          password: "secret2",
          avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
          tel: "89355674490",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Михаил",
          sName: "Киселев",
          email: "yaugreveilamu-8798@yopmail.com",
          password: "secret3",
          avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
          tel: "89955676495",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Амина",
          sName: "Белова",
          email: "jugafreubreugou-4851@yopmail.com",
          password: "secret4",
          avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
          tel: "89995674499",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Нина",
          sName: "Новикова",
          email: "lisesanumme-7514@yopmail.com",
          password: "secret5",
          avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
          tel: "89995675342",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
