import { Router } from "express";
import { createVolunteer, getVolunteers, deleteVolunteer } from "../controllers/volunteer.controller";
import {AuthenticationToken} from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/authorization.middleware";

export const VolunteerRouter = Router();

VolunteerRouter.post("/", createVolunteer);
VolunteerRouter.get("/", AuthenticationToken, authorizeRoles("admin"), getVolunteers);
VolunteerRouter.delete("/:id", AuthenticationToken, authorizeRoles("admin"), deleteVolunteer);