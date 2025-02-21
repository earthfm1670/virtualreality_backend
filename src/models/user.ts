import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/config/database";

interface UserAttributes {
    user_id: number;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "user_id" | "created_at" | "updated_at"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public created_at!: Date;
    public updated_at!: Date;
}

User.init(
    {
        user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} ,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
    },
    {sequelize, modelName: "User", tableName: "users", timestamps: false }
);

export default User;