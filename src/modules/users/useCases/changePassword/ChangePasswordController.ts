import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChangePasswordUseCase } from "./ChangePasswordUseCase";

class ChangePasswordController {
    constructor() {}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, password } = req.body;
        const changePasswordUseCase = container.resolve(ChangePasswordUseCase);
        changePasswordUseCase.execute({ id, password });
        return res.status(201).send();
    }
}
export { ChangePasswordController };
