import { User } from "../models/UserModel.js";

export const GetAllUser = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({ status: true, users: users });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const DeleteUser = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
};
