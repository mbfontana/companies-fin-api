import { Request, Response } from "express";
import Company from "../models/Company";
import { Op } from "sequelize";

const companyController = {
  find: async (req: Request, res: Response) => {
    try {
      const { ticker } = req.params;

      const company = await Company.findOne({ where: { ticker } });

      if (!company) {
        res.status(404).send();
        return;
      }

      await company.incrementViewedCounter();

      res.status(200).json(company);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  activity: async (req: Request, res: Response) => {
    try {
      const companiesWithCount = await Company.findAll({
        where: { viewedCounter: { [Op.gt]: 0 } },
      });

      res.status(200).json(companiesWithCount);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },
};

export default companyController;
