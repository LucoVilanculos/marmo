"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVolunteer = exports.getVolunteers = exports.createVolunteer = void 0;
const volunteer_model_1 = __importDefault(require("../models/volunteer.model"));
const createVolunteer = async (req, res) => {
    try {
        const { name, surname, email, phone, gender } = req.body;
        if (!name || !surname || !email || !phone || !gender) {
            res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }
        else {
            const volunteer = await volunteer_model_1.default.create({ name, surname, email, phone, gender });
            res.status(201).json({ message: "Voluntário registrado com sucesso!", data: volunteer });
        }
    }
    catch (error) {
        console.error("Erro ao registrar voluntário:", error);
        res.status(500).json({ message: "Erro ao registrar voluntário", error });
    }
};
exports.createVolunteer = createVolunteer;
const getVolunteers = async (_req, res) => {
    try {
        const volunteers = await volunteer_model_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(volunteers);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar voluntários", error });
    }
};
exports.getVolunteers = getVolunteers;
const deleteVolunteer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await volunteer_model_1.default.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: "Voluntário não encontrado." });
        }
        else {
            res.status(200).json({ message: "Voluntário removido com sucesso." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao remover voluntário", error });
    }
};
exports.deleteVolunteer = deleteVolunteer;
