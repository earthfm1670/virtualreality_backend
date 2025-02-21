import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/config/database";

interface CurrencyAttributes {
  currency_id: number;
  name: string;
  symbol: string;
  type: string;
}

interface CurrencyCreationAttributes
  extends Optional<CurrencyAttributes, "currency_id"> {}

class Currency
  extends Model<CurrencyAttributes, CurrencyCreationAttributes>
  implements CurrencyAttributes
{
  public currency_id!: number;
  public name!: string;
  public symbol!: string;
  public type!: string;
}

Currency.init(
  {
    currency_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Currency",
    tableName: "currencies",
    timestamps: false,
  }
);

export default Currency