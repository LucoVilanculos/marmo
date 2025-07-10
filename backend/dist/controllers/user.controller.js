"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.forgotPassword = exports.patchUser = exports.updateUser = exports.getMe = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
const utils_1 = require("../utils/utils");
const register = async (req, res) => {
    const body = req.body;
    const { name, email, password } = body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
    }
    const existingUser = await user_model_1.User.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = new user_model_1.User({
        name,
        email,
        password: hashedPassword,
        role: "user",
    });
    await user.save();
    await (0, utils_1.sendEmail)({
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
exports.register = register;
const getMe = (req, res) => {
    try {
        res.status(200).json(req.user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching user data" });
    }
};
exports.getMe = getMe;
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (updateData.password) {
            updateData.password = await bcrypt_1.default.hash(updateData.password, 10);
        }
        const user = await user_model_1.User.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) {
            res.status(404).json({ message: "Admin not found" });
        }
        else {
            res.status(200).json({ message: "Admin updated", user });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error updating admin", error });
    }
};
exports.updateUser = updateUser;
const patchUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (updateData.password) {
            updateData.password = await bcrypt_1.default.hash(updateData.password, 10);
        }
        const user = await user_model_1.User.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) {
            res.status(404).json({ message: "Admin not found" });
        }
        else {
            res.status(200).json({ message: "Admin patched", user });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error patching admin", error });
    }
};
exports.patchUser = patchUser;
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await user_model_1.User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "Admin not found" });
            return;
        }
        const forgotPasswordToken = Math.random().toString(36).substring(2, 15);
        user.forgotPasswordToken = forgotPasswordToken;
        await user.save();
        res.status(200).json({ message: "Password reset email sent" });
    }
    catch (error) {
        res.status(500).json({ message: "Error resetting password", error });
    }
};
exports.forgotPassword = forgotPassword;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const reqUser = req.user;
        if (reqUser.role === "admin") {
            const user = await user_model_1.User.findByIdAndDelete(id);
            if (!user) {
                res.status(404).json({ message: "Admin not found" });
            }
            else {
                res.status(200).json({ message: "Admin deleted successfully" });
            }
        }
        else if (reqUser._id === id) {
            const { password } = req.body;
            if (!password) {
                res.status(400).json({ message: "Password is required to delete your account" });
            }
            else {
                const user = await user_model_1.User.findById(id);
                if (!user) {
                    res.status(404).json({ message: "Admin not found" });
                }
                else {
                    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
                    if (!passwordMatch) {
                        res.status(401).json({ message: "Incorrect password" });
                    }
                    else {
                        await user_model_1.User.findByIdAndDelete(id);
                        res.status(200).json({ message: "Admin deleted successfully" });
                    }
                }
            }
        }
        else {
            res.status(403).json({ message: "You are not authorized to delete this admin" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting admin", error });
    }
};
exports.deleteUser = deleteUser;
