"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
exports.Email = Email;
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
async function sendEmail({ to, subject, html, replyTo, }) {
    try {
        await resend.emails.send({
            from: "Marmo <info@binario.co.mz>>",
            to,
            subject,
            html,
            ...(replyTo ? { reply_to: replyTo } : {}),
        });
        return true;
    }
    catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return false;
    }
}
async function Email(destinatary) {
    const { data, error } = await resend.emails.send({
        from: "Marmo <info@binario.co.mz>",
        to: [destinatary],
        subject: "Cadastro na Marmo",
        html: "<strong>Bem vindo a Marmo</strong><p>Obrigado por se cadastrar como voluntário.</p>",
    });
    if (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
    return data;
}
