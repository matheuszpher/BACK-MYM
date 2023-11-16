import { Request, Response } from "express";
import { container } from "tsyringe";

import { RegisterUserUseCase } from "./RegisterUserUseCase";

class RegisterUserController {
    constructor() {}
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password, monitor, professor, token } =
                req.body;
            const registerUserUseCase = container.resolve(RegisterUserUseCase);
            await registerUserUseCase.execute({
                name,
                email,
                password,
                monitor,
                professor,
                token,
            });
            return res.status(201).send();
        } catch (error) {
            if (error.message === "Email is already been used") {
                return res.status(409).send({ error: error.message });
            }
            if (error.message === "Token invalid") {
                return res.status(409).send({ error: error.message });
            }
            console.log(error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export { RegisterUserController };
