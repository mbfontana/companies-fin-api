import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../services/sequelize.service";

export interface Company {
  id: number;
  cik: string;
  name: string;
  ticker: string;
  exchange: string;
  viewedCounter: number;
}

export interface CompanyCreationAttributes extends Optional<Company, "id"> {}

export interface CompanyInstance
  extends Model<Company, CompanyCreationAttributes>,
    Company {
  incrementViewedCounter: () => Promise<void>;
    }

const Company = sequelize.define<CompanyInstance>("companies", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cik: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ticker: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  exchange: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  viewedCounter: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

(Company as any).prototype.incrementViewedCounter = async function () {
  this.viewedCounter += 1;
  await this.save();
};

export default Company;
