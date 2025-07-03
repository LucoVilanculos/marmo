import { Router } from "express";
import {
  createPublication,
  getPublications,
  updatePublication,
  deletePublication,
} from "../controllers/publication.controller";
import { AuthenticationToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/authorization.middleware";

export const PublicationRouter = Router();

PublicationRouter.post("/", AuthenticationToken, authorizeRoles("admin"), createPublication);
PublicationRouter.get("/", getPublications);
PublicationRouter.put("/:id", AuthenticationToken, authorizeRoles("admin"), updatePublication);
PublicationRouter.delete("/:id", AuthenticationToken, authorizeRoles("admin"), deletePublication);