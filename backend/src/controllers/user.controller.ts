import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";
import { UserProps } from "../types/userprops";
import {sendEmail} from "../utils/utils"; 

export const register = async (req: Request, res: Response): Promise<any> => {
  const body = req.body as Partial<UserProps>; 

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }

  const existingUser = await User.findOne({ email }) as UserProps & { _id: any };

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: "user",
  });

  await user.save();

  await sendEmail({
    to: process.env.CONTACT_EMAIL || "luisisauravilanculos@gmail.com",
    subject: "Novo registro de usuário",
    html: `
      <h2>Novo usuário registrado</h2>
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Data: ${new Date().toLocaleString()}</p>
    `,
  });


  return res.status(201).json({ message: "User registered successfully" });
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
      res.status(404).json({ message: "Admin not found" });
    } else {
      res.status(200).json({ message: "Admin updated", user });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating admin", error });
  }
};

export const patchUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      res.status(404).json({ message: "Admin not found" });
    } else {
      res.status(200).json({ message: "Admin patched", user });
    }
  } catch (error) {
    res.status(500).json({ message: "Error patching admin", error });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Admin not found" });
      return;
    }

    const forgotPasswordToken = Math.random().toString(36).substring(2, 15);

    user.forgotPasswordToken = forgotPasswordToken;
    await user.save();


    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Error resetting password", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reqUser = (req as any).user;

    if (reqUser.role === "admin") {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        res.status(404).json({ message: "Admin not found" });
      } else {
        res.status(200).json({ message: "Admin deleted successfully" });
      }
    } else if (reqUser._id === id) {
      const { password } = req.body;
      if (!password) {
        res.status(400).json({ message: "Password is required to delete your account" });
      } else {
        const user = await User.findById(id);
        if (!user) {
          res.status(404).json({ message: "Admin not found" });
        } else {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            res.status(401).json({ message: "Incorrect password" });
          } else {
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: "Admin deleted successfully" });
          }
        }
      }
    } else {
      res.status(403).json({ message: "You are not authorized to delete this admin" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting admin", error });
  }
};