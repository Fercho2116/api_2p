'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materias', [
      {
        nombre: 'Matemáticas I',
        creditos: 4,
        descripcion: 'Curso introductorio a las matemáticas.',
        id_area: 1, // Suponiendo que 1 corresponde a 'Básica'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Programación II',
        creditos: 5,
        descripcion: 'Curso avanzado de programación.',
        id_area: 2, // Suponiendo que 2 corresponde a 'Profesionalizante'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ética Profesional',
        creditos: 3,
        descripcion: 'Curso sobre principios éticos en la profesión.',
        id_area: 3, // Suponiendo que 3 corresponde a 'Titulación'
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Materias', null, {});
  }
};
