"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDonation = exports.getDonations = exports.createDonation = void 0;
const donation_model_1 = require("../models/donation.model");
function validateDonation(method, phoneOrAccount) {
    if (["M-Pesa", "E-Mola", "M-Kesh"].includes(method)) {
        return /^8[4567]\d{7}$/.test(phoneOrAccount);
    }
    if (["BCI", "Millennium BIM", "Standard Bank", "FNB"].includes(method)) {
        return /^\d{6,}$/.test(phoneOrAccount);
    }
    return false;
}
const createDonation = async (req, res) => {
    try {
        const { name, method, value, phoneOrAccount } = req.body;
        if (!name || !method || !value || !phoneOrAccount) {
            res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }
        else if (!validateDonation(method, phoneOrAccount)) {
            res.status(400).json({ message: "Número de telefone ou conta inválido para o método selecionado." });
        }
        else {
            const donation = await donation_model_1.Donation.create({ name, method, value, phoneOrAccount });
            res.status(201).json({ message: "Doação registrada com sucesso!", data: donation });
        }
    }
    catch (error) {
        console.error("Erro ao registrar doação:", error);
        res.status(500).json({ message: "Erro ao registrar doação", error });
    }
};
exports.createDonation = createDonation;
const getDonations = async (_req, res) => {
    try {
        const donations = await donation_model_1.Donation.find().sort({ createdAt: -1 });
        res.status(200).json(donations);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar doações", error });
    }
};
exports.getDonations = getDonations;
const deleteDonation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await donation_model_1.Donation.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: "Doação não encontrada." });
        }
        else {
            res.status(200).json({ message: "Doação removida com sucesso." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao remover doação", error });
    }
};
exports.deleteDonation = deleteDonation;
