import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/config/database";

interface TransactionAttributes {
  transaction_id: number;
  from_user_id: number;
  to_user_id: number | null;
  currency_id: number;
  amount: number;
  type: "exchange" | "transfer";
  status: "completed" | "pending" | "failed";
  timestamp: Date;
}

interface TransactionCreationAttributes
  extends Optional<TransactionAttributes, "transaction_id" | "timestamp"> {}

class Transaction
  extends Model<TransactionAttributes, TransactionCreationAttributes>
  implements TransactionAttributes
{
  public transaction_id!: number;
  public from_user_id!: number;
  public to_user_id!: number | null;
  public currency_id!: number;
  public amount!: number;
  public type!: "exchange" | "transfer";
  public status!: "completed" | "pending" | "failed";
  public timestamp!: Date;
}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    from_user_id: { type: DataTypes.INTEGER, allowNull: false },
    to_user_id: { type: DataTypes.INTEGER, allowNull: true },
    currency_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    type: { type: DataTypes.ENUM("exchange", "transfer"), allowNull: false },
    status: {
      type: DataTypes.ENUM("completed", "pending", "failed"),
      allowNull: false,
    },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    modelName: "Transaction",
    tableName: "transactions",
    timestamps: false,
  }
);

export default Transaction;
