import express from "express";
import { getUsers, RegisterUser, Login } from "../controllers/Users.js";
const router = express.Router();
router.get("/users", getUsers);
router.post("/users", RegisterUser);
router.post("/users", Login);
export default router;
