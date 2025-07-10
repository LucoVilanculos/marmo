"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faq = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const faqSchema = new mongoose_1.default.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    categoryId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Category" },
    isPublished: { type: Boolean, default: true },
}, { timestamps: true });
exports.Faq = mongoose_1.default.models.Faq || mongoose_1.default.model("Faq", faqSchema);
