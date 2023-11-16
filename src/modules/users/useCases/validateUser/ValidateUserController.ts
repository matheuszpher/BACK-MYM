import { Request, Response } from "express";
import { container } from "tsyringe";

import { ValidateUserUseCase } from "./ValidateUserUseCase";

class ValidateUserController {
    constructor() {}
    async handle(req: Request, res: Response) {
        const { id } = req.body;
        const validateUserUseCase = container.resolve(ValidateUserUseCase);
        await validateUserUseCase.execute(id);
        return res.status(200).send();
    }
}
export { ValidateUserController };
