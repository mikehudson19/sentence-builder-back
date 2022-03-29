'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [
      { word: "Actor", wordTypeId: 1 },
      { word: "Airport", wordTypeId: 2 },
      { word: "Dagger", wordTypeId: 3 },
      { word: "Pillow", wordTypeId: 4 },
      { word: "Helicopter", wordTypeId: 5 },
      { word: "Honey", wordTypeId: 6 },
      { word: "Horse", wordTypeId: 7 },
      { word: "Ice", wordTypeId: 8 },
      { word: "Rain", wordTypeId: 9 }
      
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  }
};
