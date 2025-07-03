import { Request, Response } from "express";
import { Donation } from "../models/donation.model";
import { DonationProps, DonationMethod } from "../types/donationprops";

function validateDonation(method: DonationMethod, phoneOrAccount: string): boolean {
  if (["M-Pesa", "E-Mola", "M-Kesh"].includes(method)) {
    return /^8[4567]\d{7}$/.test(phoneOrAccount);
  }
  if (["BCI", "Millennium BIM", "Standard Bank", "FNB"].includes(method)) {
    return /^\d{6,}$/.test(phoneOrAccount);
  }
  return false;
}

export const createDonation = async (req: Request, res: Response) => {
  try {
    const { name, method, value, phoneOrAccount } = req.body as DonationProps;

    if (!name || !method || !value || !phoneOrAccount) {
      res.status(400).json({ message: "Todos os campos são obrigatórios." });
    } else if (!validateDonation(method, phoneOrAccount)) {
      res.status(400).json({ message: "Número de telefone ou conta inválido para o método selecionado." });
    } else {
      const donation = await Donation.create({ name, method, value, phoneOrAccount });
      res.status(201).json({ message: "Doação registrada com sucesso!", data: donation });
    }
  } catch (error) {
    console.error("Erro ao registrar doação:", error);
    res.status(500).json({ message: "Erro ao registrar doação", error });
  }
};

export const getDonations = async (_req: Request, res: Response) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar doações", error });
  }
};

export const deleteDonation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Donation.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Doação não encontrada." });
    } else {
      res.status(200).json({ message: "Doação removida com sucesso." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover doação", error });
  }
};