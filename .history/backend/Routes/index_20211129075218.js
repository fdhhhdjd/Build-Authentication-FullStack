import express from "express";
import { getUsers, RegisterUser } from "../controllers/Users.js";
const router = express.Router();
router.get("/users", getUsers);
router.post("/users", RegisterUser);
export default router;
