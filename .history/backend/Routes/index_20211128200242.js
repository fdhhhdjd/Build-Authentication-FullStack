import express from "express";
import { getUser } from "../controllers/Users.js";
const router = express.Router();
router.get("/users", getUser);
export default router;
