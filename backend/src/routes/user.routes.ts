import { Router } from "express";
import {
  getMe,
  updateUser,
  forgotPassword,
  deleteUser,
  patchUser
} from "../controllers/user.controller";
import { AuthenticationToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/authorization.middleware"

export const UserRouter = Router();


UserRouter.get("/profile", AuthenticationToken, authorizeRoles("admin"), getMe);

UserRouter.put("/:id", AuthenticationToken, authorizeRoles("admin"), updateUser);

UserRouter.patch("/:id", AuthenticationToken, authorizeRoles("admin"), patchUser);

UserRouter.post("/forgot-password", forgotPassword);

UserRouter.delete("/:id", AuthenticationToken, authorizeRoles("admin"), deleteUser);