"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("companies", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cik: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      ticker: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      exchange: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      viewed_counter: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("companies");
  },
};
