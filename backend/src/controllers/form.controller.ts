import { Request, Response } from "express";
import { FormMessage } from "../models/form.model";
import { FormProps } from "../types/formprops";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const createFormMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, description } = req.body as FormProps;

    if (!name || !email || !subject || !description) {
      res.status(400).json({ message: "Todos os campos são obrigatórios." });
    } else {
      const message = await FormMessage.create({ name, email, subject, description });

      await resend.emails.send({
        from: "http://localhost:3002",
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
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    res.status(500).json({ message: "Erro ao enviar mensagem", error });
  }
};

export const getFormMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await FormMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar mensagens", error });
  }
};

export const deleteFormMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await FormMessage.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Mensagem não encontrada." });
    } else {
      res.status(200).json({ message: "Mensagem removida com sucesso." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover mensagem", error });
  }
};