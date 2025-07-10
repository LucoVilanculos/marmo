"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
const utils_1 = require("../utils/utils");
const login = async (req, res) => {
    const body = req.body;
    const { email, password } = body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await user_model_1.User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const isEqual = await bcrypt_1.default.compare(password, user.password);
    if (!isEqual) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const jwtSecret = process.env.JWT_SECRET || "";
    const token = jsonwebtoken_1.default.sign({
        userId: String(user._id),
        role: user.role,
        email: user.email,
        name: user.name,
    }, jwtSecret, { expiresIn: "24h" });
    await (0, utils_1.sendEmail)({
        to: process.env.CONTACT_EMAIL || "",
        subject: "Novo login de usuário",
        html: `
      <h2>Usuário autenticado com sucesso</h2>
      <p>Nome: ${user.name}</p>
      <p>Email: ${email}</p>
      <p>Data: ${new Date().toLocaleString()}</p>
    `,
    });
    const { password: _, ...userData } = user.toObject();
    return res.status(200).json({
        message: "Ok",
        user: userData,
        token,
    });
};
exports.login = login;
