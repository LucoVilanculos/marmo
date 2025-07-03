import { Request, Response } from "express";
import Volunteer from "../models/volunteer.model";
import { VolunteerProps } from "../types/volunteerprops";

export const createVolunteer = async (req: Request, res: Response) => {
  try {
    const { name, surname, email, phone, gender } = req.body as VolunteerProps;

    if (!name || !surname || !email || !phone || !gender) {
      res.status(400).json({ message: "Todos os campos são obrigatórios." });
    } else {
      const volunteer = await Volunteer.create({ name, surname, email, phone, gender });
      res.status(201).json({ message: "Voluntário registrado com sucesso!", data: volunteer });
    }
  } catch (error) {
    console.error("Erro ao registrar voluntário:", error);
    res.status(500).json({ message: "Erro ao registrar voluntário", error });
  }
};

export const getVolunteers = async (_req: Request, res: Response) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar voluntários", error });
  }
};

export const deleteVolunteer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Volunteer.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Voluntário não encontrado." });
    } else {
      res.status(200).json({ message: "Voluntário removido com sucesso." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover voluntário", error });
  }
};