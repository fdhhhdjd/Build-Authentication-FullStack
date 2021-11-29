import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"; // ma hoa mk
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
export const RegisterUser = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) {
    return res.status(400).json({ msg: "confirmPassword incorrect!  " });
    const salt = await bcrypt.genSalt();
  }
};
