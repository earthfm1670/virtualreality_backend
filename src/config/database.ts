import { Sequelize } from "sequelize";

const sequelize = new Sequelize("virtualreality", "postgres", "", {
    host: "localhost",
    dialect: "postgres",
})

export default sequelize;