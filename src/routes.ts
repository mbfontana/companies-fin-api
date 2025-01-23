import express from "express";
import companyController from "./controllers/company.controller";

const router = express.Router();

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

router.get("/company/ticker/:ticker", companyController.find);
router.get("/company/activity", companyController.activity);

export default router;
