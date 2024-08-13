'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Areas', [
      { nombre: 'Básica', estado: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Profesionalizante', estado: true, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Titulación', estado: true, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Areas', null, {});
  }
};
