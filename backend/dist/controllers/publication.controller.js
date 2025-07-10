"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePublication = exports.updatePublication = exports.getPublications = exports.createPublication = void 0;
const publication_model_1 = require("../models/publication.model");
const createPublication = async (req, res) => {
    try {
        const { title, content, image, type, published } = req.body;
        if (!title || !content || !type) {
            res.status(400).json({ message: "Campos obrigatórios faltando." });
        }
        else {
            const pub = await publication_model_1.Publication.create({ title, content, image, type, published });
            res.status(201).json({ message: "Publicação criada!", data: pub });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao criar publicação", error });
    }
};
exports.createPublication = createPublication;
const getPublications = async (_req, res) => {
    try {
        const pubs = await publication_model_1.Publication.find().sort({ createdAt: -1 });
        res.status(200).json(pubs);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar publicações", error });
    }
};
exports.getPublications = getPublications;
const updatePublication = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const pub = await publication_model_1.Publication.findByIdAndUpdate(id, data, { new: true });
        if (!pub)
            res.status(404).json({ message: "Publicação não encontrada" });
        else
            res.status(200).json({ message: "Publicação atualizada", data: pub });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao atualizar publicação", error });
    }
};
exports.updatePublication = updatePublication;
const deletePublication = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await publication_model_1.Publication.findByIdAndDelete(id);
        if (!deleted)
            res.status(404).json({ message: "Publicação não encontrada" });
        else
            res.status(200).json({ message: "Publicação removida" });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao remover publicação", error });
    }
};
exports.deletePublication = deletePublication;
