import { Options, Sequelize } from "sequelize";
import databaseConfig from "../config/database";

const sequelize = new Sequelize(databaseConfig as Options);

const sequelizeService = {
  init: async () => {
    try {
      await sequelize.authenticate();
      console.log("[SEQUELIZE] Connection to database successful");
    } catch (error) {
      console.error("[SEQUELIZE] Unable to connect to the database:", error);
      throw error;
    }
  },
};

export { sequelize };
export default sequelizeService;
