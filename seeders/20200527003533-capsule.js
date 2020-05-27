'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('capsules', [{
        capsuleName: 'example capsule',
        sealedTime: new Date,
        openTime: new Date,
        capsuleCode: "1a2b3c",
        email: 'nickle@back.com',
        password: 'nickle2',
        movies: "Example the Movie",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      }]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('capsules', null, {});
  }
};
