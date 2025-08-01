import { User } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
// import Errors from "../errors";
import UnauthenticatedError from "../errors/unauthenticated.js";

const auth = async (req, res, next) => {
  // const { UnauthenticatedError } = Errors;
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
