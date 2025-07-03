import { Admin } from "mongodb";
import { Document } from "mongoose";

export type UserRole = "admin";


export interface UserProps extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}