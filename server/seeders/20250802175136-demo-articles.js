'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        title: 'Defending the Future',
        content: 'How Black lawyers are shaping justice in modern America.',
        category: 'Law',
        image: 'https://via.placeholder.com/100',
        profileId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Coding for Change',
        content: 'Black engineers building inclusive technologies.',
        category: 'Tech',
        image: 'https://via.placeholder.com/100',
        profileId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // …add more seeded articles here…
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};

