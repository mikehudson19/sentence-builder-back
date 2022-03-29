'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WordTypes', [
      { value: "Noun" },
      { value: "Verb" },
      { value: "Adjective" },
      { value: "Adverb" },
      { value: "Pronoun" },
      { value: "Preposition" },
      { value: "Conjunction" },
      { value: "Determiner" },
      { value: "Exclamation" },
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WordTypes');
  }
};
