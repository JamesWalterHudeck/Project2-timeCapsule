'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('images', [{
        imageName: 'image1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        CapsuleId: 1
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('images', null, {});
  }
};
