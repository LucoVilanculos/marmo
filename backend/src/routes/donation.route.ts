import { Router } from "express";
import { 
createDonation,
  getDonations,
  deleteDonation
} from "../controllers/donation.controller";
import { AuthenticationToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/authorization.middleware";

export const DonationRouter = Router();

DonationRouter.post("/", createDonation);
DonationRouter.get("/", AuthenticationToken, authorizeRoles("admin"), getDonations);
DonationRouter.delete("/:id", AuthenticationToken, authorizeRoles("admin"), deleteDonation);