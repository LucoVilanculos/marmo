import mongoose, { Schema } from "mongoose";
import { UserProps } from "../types/userprops";



const userSchema = new Schema<UserProps>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["admin"],
      default: "admin",
    }
},
);

export const User = mongoose.models.User || mongoose.model<UserProps>("User", userSchema);