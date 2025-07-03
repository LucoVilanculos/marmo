import { Request, Response } from "express";
import { Publication } from "../models/publication.model";
import { PublicationProps } from "../types/publicationprops";

export const createPublication = async (req: Request, res: Response) => {
  try {
    const { title, content, image, type, published } = req.body as PublicationProps;
    if (!title || !content || !type) {
      res.status(400).json({ message: "Campos obrigatórios faltando." });
    } else {
      const pub = await Publication.create({ title, content, image, type, published });
      res.status(201).json({ message: "Publicação criada!", data: pub });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar publicação", error });
  }
};

export const getPublications = async (_req: Request, res: Response) => {
  try {
    const pubs = await Publication.find().sort({ createdAt: -1 });
    res.status(200).json(pubs);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar publicações", error });
  }
};

export const updatePublication = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body as Partial<PublicationProps>;
    const pub = await Publication.findByIdAndUpdate(id, data, { new: true });
    if (!pub) res.status(404).json({ message: "Publicação não encontrada" });
    else res.status(200).json({ message: "Publicação atualizada", data: pub });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar publicação", error });
  }
};

export const deletePublication = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Publication.findByIdAndDelete(id);
    if (!deleted) res.status(404).json({ message: "Publicação não encontrada" });
    else res.status(200).json({ message: "Publicação removida" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover publicação", error });
  }
};