import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "", {
  host: "localhost:81",
  dialect: "mysql",
});
export default db;
