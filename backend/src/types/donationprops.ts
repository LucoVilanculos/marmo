export type DonationMethod =
  | "M-Pesa"
  | "E-Mola"
  | "M-Kesh"
  | "BCI"
  | "Millennium BIM"
  | "Standard Bank"
  | "FNB";

export interface DonationProps {
  name: string;
  method: DonationMethod;
  value: number;
  phoneOrAccount: string;
  createdAt?: Date;
}