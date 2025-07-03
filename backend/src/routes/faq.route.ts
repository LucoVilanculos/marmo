import { Router } from "express";
import {
  createFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  deleteFaq,
} from "../controllers/faq.controller";

export const FaqRouter = Router();

FaqRouter.post("/", createFaq);

FaqRouter.get("/", getAllFaqs);

FaqRouter.get("/:id", getFaqById);

FaqRouter.put("/:id", updateFaq);

FaqRouter.delete("/:id", deleteFaq);
