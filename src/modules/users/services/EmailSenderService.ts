import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";
import { injectable } from "tsyringe";

dotenv.config();

interface IEmailSender {
    email: string;
    body: string;
}

@injectable()
class EmailSenderService {
    constructor() {}

    async execute({ email, body }: IEmailSender) {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        await transporter
            .sendMail({
                from: "My-Monitor <meumonitormym@gmail.com>",
                to: email,
                subject: "Seja bem vindo ao My-Monitor :)",
                html: body,
                text: "bem vindo ao app",
            })
            .then(() => console.log("Email enviado com sucesso"))
            .catch((error) => console.log("Algo deu errado:", error));
    }
}
export { EmailSenderService };
