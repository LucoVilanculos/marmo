import mongoose, { Schema } from "mongoose";
import type { FormProps } from "../types/formprops";

const formSchema = new Schema<FormProps>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const FormMessage = mongoose.models.FormMessage || mongoose.model<FormProps>("FormMessage", formSchema);