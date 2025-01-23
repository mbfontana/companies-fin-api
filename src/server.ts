import sequelizeService from "./services/sequelize.service";
import expressService from "./services/express.service";
import companyService from "./services/company.service";

(async () => {
  try {
    await sequelizeService.init();
    await expressService.init();
    await companyService.upsert();
  } catch (error) {
    console.error("[SERVER] Error during server initialization:", error);
    process.exit(1);
  }
})();
