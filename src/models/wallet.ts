import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/config/database";
import Currency from "./currency";

interface WalletAttributes {
  wallet_id: number;
  user_id: number;
  currency_id: number;
  balance: number;
}

interface WalletCreationAttributes
  extends Optional<WalletAttributes, "wallet_id"> {}

class Wallet
  extends Model<WalletAttributes, WalletCreationAttributes>
  implements WalletAttributes
{
  public wallet_id!: number;
  public user_id!: number;
  public currency_id!: number;
  public balance!: number;

  public static async getWalletsWithCurrency(): Promise<Wallet[]> {
    return await Wallet.findAll({
      include: [
        {
          model: Currency,
          attributes: ["name", "symbol", "type"],
        },
      ],
    });
  }
}

Wallet.init(
  {
    wallet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL,
  },
  {
    sequelize,
    modelName: "Wallet",
    tableName: "wallets",
    timestamps: false,
  }
);

Wallet.belongsTo(Currency, { foreignKey: "currency_id" });

export default Wallet;
