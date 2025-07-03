import mongoose, { Schema } from "mongoose";
import type { DonationProps } from "../types/donationprops";

const donationSchema = new Schema<DonationProps>(
  {
    name: { type: String, required: true },
    method: { type: String, required: true },
    value: { type: Number, required: true },
    phoneOrAccount: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Donation =
  mongoose.models.Donation || mongoose.model<DonationProps>("Donation", donationSchema);