import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/config/database";

interface OrderAttributes {
  order_id: number;
  user_id: number;
  currency_id: number;
  order_type: "buy" | "sell";
  amount: number;
  price: number;
  status: "open" | "completed" | "cancelled";
  created_at: Date;
}

interface OrderCreationAttributes
  extends Optional<OrderAttributes, "order_id" | "created_at"> {}

class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public order_id!: number;
  public user_id!: number;
  public currency_id!: number;
  public order_type!: "buy" | "sell";
  public amount!: number;
  public price!: number;
  public status!: "open" | "completed" | "cancelled";
  public created_at!: Date;
}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    currency_id: { type: DataTypes.INTEGER, allowNull: false },
    order_type: { type: DataTypes.ENUM("buy", "sell"), allowNull: false },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    status: {
      type: DataTypes.ENUM("open", "completed", "cancelled"),
      allowNull: false,
    },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: "Order", tableName: "orders", timestamps: false }
);

export default Order;