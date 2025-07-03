import { Document, Types } from "mongoose";

export interface FaqProps extends Document {
  question: string;
  answer: string;
  categoryId?: Types.ObjectId;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}