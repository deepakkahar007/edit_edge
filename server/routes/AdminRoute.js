import { Router } from "express";
import { GetAllUser } from "../controllers/Admin.js";

export const AdminRouter = Router();

AdminRouter.route("/").get(GetAllUser);
