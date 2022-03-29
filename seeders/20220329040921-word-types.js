'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WordTypes', [
      { wordType: "Noun" },
      { wordType: "Verb" },
      { wordType: "Adjective" },
      { wordType: "Adverb" },
      { wordType: "Pronoun" },
      { wordType: "Preposition" },
      { wordType: "Conjunction" },
      { wordType: "Determiner" },
      { wordType: "Exclamation" },
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WordTypes', null, {});
  }
};
