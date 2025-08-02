'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', [
      {
        name: 'Dr. Ada Thompson',
        field: 'Medicine',
        image: 'https://via.placeholder.com/150',
        bio: 'Cardiologist focused on community health.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eng. Jamal Carter',
        field: 'Tech',
        image: 'https://via.placeholder.com/150',
        bio: 'Software engineer & open-source contributor.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // …add 2–3 more profiles here…
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};

