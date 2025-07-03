import { Router } from "express";
import { 
    createFormMessage,
    getFormMessages,
    deleteFormMessage
} from "../controllers/form.controller";
import { AuthenticationToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/authorization.middleware";

export const FormRouter = Router();

FormRouter.post("/", createFormMessage);
FormRouter.get("/", AuthenticationToken, authorizeRoles("admin"), getFormMessages);
FormRouter.delete("/:id", AuthenticationToken, authorizeRoles("admin"), deleteFormMessage);