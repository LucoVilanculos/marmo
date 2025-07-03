import mongoose, { Schema } from "mongoose";
import type { VolunteerProps } from "../types/volunteerprops";

const volunteerSchema = new Schema<VolunteerProps>(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: {
      type: String,
      enum: ["masculino", "feminino", "outros", "prefiro não dizer"],
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Volunteer = mongoose.model<VolunteerProps>("Volunteer", volunteerSchema);

export default Volunteer;