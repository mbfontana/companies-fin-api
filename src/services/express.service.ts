import express from "express";
import cors from "cors";
import router from "../routes";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3001;

const expressService = {
  init: async () => {
    try {
      const app = express();
      app.use(cors());
      app.use(express.json());
      app.use(router);
      app.listen(PORT, () => {
        console.log(
          `[EXPRESS] Server is running on port ${PORT}`
        );
      });
    } catch (error) {
      console.error(
        "[EXPRESS] Error during express service initialization:",
        error
      );
      throw error;
    }
  },
};

export default expressService;
