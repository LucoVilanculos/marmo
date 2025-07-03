import cors from "cors";

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { AuthRouter } from "./routes/auth.route";
import { UserRouter } from "./routes/user.routes";
import { FaqRouter } from "./routes/faq.route";
import { FormRouter } from "./routes/form.route";
import { DonationRouter } from "./routes/donation.route";
import { PublicationRouter } from "./routes/publication.route";
import { VolunteerRouter } from "./routes/volunteer.route";




const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5002" }));
dotenv.config();

const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3002;

app.use("/", AuthRouter);
app.use("/user", UserRouter);
app.use("/faq", FaqRouter);
app.use("/form", FormRouter);
app.use("/donation", DonationRouter);
app.use("/publication", PublicationRouter);
app.use("/volunteer", VolunteerRouter);



mongoose
  .connect(process.env.BD_URI as string)
  .then(() => console.log("BD conectado com sucesso!"))
  .catch((error) =>
    console.log("Ocorreu um erro ao contectar com a DB: ", error)
  );

app.listen(port, () => console.log(`Server running on ${host}:${port}`));