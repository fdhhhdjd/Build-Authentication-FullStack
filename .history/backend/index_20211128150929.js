import express from "express";
import db from "./config/Database";
const app = express();
app.listen(5000, () => console.log("server running at port 5000"));
