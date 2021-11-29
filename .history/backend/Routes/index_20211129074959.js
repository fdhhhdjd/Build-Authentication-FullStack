import express from "express";
import { getUsers } from "../controllers/Users.js";
const router = express.Router();
router.get("/users", getUsers);
router.post("/users", getUsers);
export default router;
