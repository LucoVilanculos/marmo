"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const auth_route_1 = require("./routes/auth.route");
const user_routes_1 = require("./routes/user.routes");
const faq_route_1 = require("./routes/faq.route");
const form_route_1 = require("./routes/form.route");
const donation_route_1 = require("./routes/donation.route");
const publication_route_1 = require("./routes/publication.route");
const volunteer_route_1 = require("./routes/volunteer.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:3001" }));
const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3002;
app.use("/", auth_route_1.AuthRouter);
app.use("/user", user_routes_1.UserRouter);
app.use("/faq", faq_route_1.FaqRouter);
app.use("/form", form_route_1.FormRouter);
app.use("/donation", donation_route_1.DonationRouter);
app.use("/publication", publication_route_1.PublicationRouter);
app.use("/volunteer", volunteer_route_1.VolunteerRouter);
mongoose_1.default
    .connect(process.env.BD_URI)
    .then(() => console.log("BD conectado com sucesso!"))
    .catch((error) => console.log("Ocorreu um erro ao contectar com a DB: ", error));
app.listen(port, () => console.log(`Server running on ${host}:${port}`));
