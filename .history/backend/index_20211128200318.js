import express from "express";
import db from "./config/Database.js";
import router from "./Routes/index.js";
const app = express();
try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.log(error);
}
app.listen(5000, () => console.log("server running at port 5000"));
