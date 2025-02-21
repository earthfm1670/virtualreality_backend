import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/config/database";

interface TransferAttributes {
  transfer_id: number;
  user_id: number;
  currency_id: number;
  amount: number;
  transfer_type: "internal" | "external";
  recipient_address: string | null;
  status: "completed" | "pending";
  timestamp: Date;
}

interface TransferCreationAttributes extends Optional<TransferAttributes, "transfer_id" | "timestamp"> {}

class Transfer extends Model<TransferAttributes, TransferCreationAttributes> implements TransferAttributes {
    public transfer_id!: number;
    public user_id!: number;
    public currency_id!: number;
    public amount!: number;
    public transfer_type!: "internal" | "external";
    public recipient_address!: string | null;
    public status!: "completed" | "pending";
    public timestamp!: Date;        
}

Transfer.init(
    {
        transfer_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        user_id: {type: DataTypes.INTEGER, allowNull: false},
        currency_id: {type: DataTypes.INTEGER, allowNull: false},
        amount: {type: DataTypes.DECIMAL, allowNull: false},
        transfer_type: {type: DataTypes.ENUM("internal", "external"), allowNull: false},
        recipient_address: {type: DataTypes.STRING, allowNull: true},
        status: {type: DataTypes.ENUM("completed", "pending"), allowNull: false},
        timestamp: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    },
    {sequelize, modelName: "Transfer", tableName: "transfers", timestamps: false}
)

export default Transfer;