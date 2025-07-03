import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import { UserProps } from "../types/userprops";

export const login = async (req: Request, res: Response): Promise<any> => {
  const body = req.body as Partial<UserProps>; 

  const { email, password } = body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email }) as (UserProps & { _id: any, password: string, toObject: () => any });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isEqual = await bcrypt.compare(password, user.password);

  if (!isEqual) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const jwtSecret = process.env.JWT_SECRET || "";

  const token = jwt.sign(
    {
      userId: String(user._id), 
      role: user.role,
      email: user.email,
      name: user.name,
    },
    jwtSecret,
    { expiresIn: "24h" }
  );

  const { password: _, ...userData } = user.toObject();

  return res.status(200).json({
    message: "Ok",
    user: userData,
    token,
  });
};

export const getMe =(req:Request,res:Response)=> {
  try {
    res.status(200).json((req as any ).user)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error fetching user data" })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User updated", user });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};