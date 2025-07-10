"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFormMessage = exports.getFormMessages = exports.createFormMessage = void 0;
const form_model_1 = require("../models/form.model");
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const createFormMessage = async (req, res) => {
    try {
        const { name, email, subject, description } = req.body;
        if (!name || !email || !subject || !description) {
            res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }
        else {
            const message = await form_model_1.FormMessage.create({ name, email, subject, description });
            await resend.emails.send({
                from: "Marmo <info@binario.co.mz>>",
                to: process.env.CONTACT_EMAIL || "luisisauravilanculos@gmail.com",
                subject: `[Contato MARMO] ${subject}`,
                html: `
          <h2>Nova mensagem de contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <p><strong>Mensagem:</strong><br/>${description}</p>
        `,
            });
            res.status(201).json({ message: "Mensagem enviada com sucesso!", data: message });
        }
    }
    catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        res.status(500).json({ message: "Erro ao enviar mensagem", error });
    }
};
exports.createFormMessage = createFormMessage;
const getFormMessages = async (_req, res) => {
    try {
        const messages = await form_model_1.FormMessage.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar mensagens", error });
    }
};
exports.getFormMessages = getFormMessages;
const deleteFormMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await form_model_1.FormMessage.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ message: "Mensagem não encontrada." });
        }
        else {
            res.status(200).json({ message: "Mensagem removida com sucesso." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao remover mensagem", error });
    }
};
exports.deleteFormMessage = deleteFormMessage;
