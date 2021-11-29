import express from "express";
import { getUsers, RegisterUser, Login } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken";
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", RegisterUser);
router.post("/login", Login);
router.post("/token", refreshToken);
export default router;
