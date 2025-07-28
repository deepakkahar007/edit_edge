import { model, Schema } from "mongoose";

const UserModel = new Schema({
  name: {
    type: String,
    required: [true, "the name is required field"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "the email is required field"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "the password is required field"],
    trim: true,
  },
  role: {
    type: String,
    enum: {
      values: ["USER", "ADMIN"],
      message: "{VALUE} is not supported",
    },
  },
});

export const User = model("user", UserModel);
