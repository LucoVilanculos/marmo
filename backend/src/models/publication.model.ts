import mongoose, { Schema } from "mongoose";
import type { PublicationProps } from "../types/publicationprops";

const publicationSchema = new Schema<PublicationProps>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    type: { type: String, enum: ["noticia", "evento", "campanha", "banner", "galeria"], required: true },
    published: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

export const Publication = mongoose.models.Publication || mongoose.model<PublicationProps>("Publication", publicationSchema);