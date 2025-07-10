"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFaq = exports.updateFaq = exports.getFaqById = exports.getAllFaqs = exports.createFaq = void 0;
const faq_model_1 = require("../models/faq.model");
const createFaq = async (req, res) => {
    try {
        const data = req.body;
        if (!data.question || !data.answer) {
            res.status(400).json({ message: "Question and Answer are required" });
        }
        const faq = new faq_model_1.Faq(data);
        await faq.save();
        res.status(201).json({ message: "FAQ created successfully", faq });
    }
    catch (error) {
        console.error("Error creating FAQ:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.createFaq = createFaq;
const getAllFaqs = async (req, res) => {
    try {
        const { categoryId, isPublished } = req.query;
        const filter = {};
        if (categoryId)
            filter.categoryId = categoryId;
        if (isPublished !== undefined)
            filter.isPublished = isPublished === "true";
        const faqs = await faq_model_1.Faq.find(filter).sort({ createdAt: -1 });
        res.status(200).json({ faqs });
    }
    catch (error) {
        console.error("Error fetching FAQs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getAllFaqs = getAllFaqs;
const getFaqById = async (req, res) => {
    try {
        const { id } = req.params;
        const faq = await faq_model_1.Faq.findById(id);
        if (!faq)
            res.status(404).json({ message: "FAQ not found" });
        res.status(200).json({ faq });
    }
    catch (error) {
        console.error("Error fetching FAQ by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getFaqById = getFaqById;
const updateFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedFaq = await faq_model_1.Faq.findByIdAndUpdate(id, data, { new: true });
        if (!updatedFaq)
            res.status(404).json({ message: "FAQ not found" });
        res.status(200).json({ message: "FAQ updated successfully", faq: updatedFaq });
    }
    catch (error) {
        console.error("Error updating FAQ:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.updateFaq = updateFaq;
const deleteFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFaq = await faq_model_1.Faq.findByIdAndDelete(id);
        if (!deletedFaq)
            res.status(404).json({ message: "FAQ not found" });
        res.status(200).json({ message: "FAQ deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting FAQ:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.deleteFaq = deleteFaq;
