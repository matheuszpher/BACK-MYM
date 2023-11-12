import { Router } from "express";

import { RegisterUserController } from "../modules/users/useCases/RegisterUserController";

const authRouter = Router();
const registerUserController = new RegisterUserController();
authRouter.post("/register", registerUserController.handle);

export { authRouter };
