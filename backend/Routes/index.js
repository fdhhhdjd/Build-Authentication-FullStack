import express from "express";
import { getUsers, RegisterUser, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

//router.get("/users", getUsers);
router.get("/users", verifyToken, getUsers);
router.post("/users", RegisterUser);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
export default router;
