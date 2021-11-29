import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"; // ma hoa mk
import jwt from "jsonwebtoken";
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
  if (password !== confPassword)
    return res.status(400).json({ msg: "confirmPassword incorrect!  " });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register Success" });
  } catch (error) {
    console.log(error);
  }
};
export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
  } catch (error) {
    res.status(404).json({ msg: "Account does not exist" });
  }
};
