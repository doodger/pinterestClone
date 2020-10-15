'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Pins', 'body' , {
      type : Sequelize.TEXT,
    })
    },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Pins', 'body' , {
      type : Sequelize.STRING,
    })
  }
};
