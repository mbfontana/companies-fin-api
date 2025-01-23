import axios from "axios";
import Company from "../models/Company";

const companyService = {
  upsert: async () => {
    try {
      const response = await axios.get(
        "https://www.sec.gov/files/company_tickers_exchange.json",
        {
          headers: {
            "User-Agent": "John Doe (test@example.com)",
            "Content-Type": "application/json",
          },
        }
      );

      const companiesList = response?.data?.data;

      const companies = companiesList.map(
        ([cik, name, ticker, exchange]: string[]) => ({
          cik,
          name,
          ticker,
          exchange,
          viewedCounter: 0,
        })
      );

      await Company.bulkCreate(companies, {
        updateOnDuplicate: ["name", "exchange"],
      });

      console.log("Database updated successfully!");
    } catch (error) {
      console.error("Error updating database:", error);
    }
  },
};

export default companyService;
