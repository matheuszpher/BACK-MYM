import { Router } from "express";

import { RegisterUserController } from "../modules/users/useCases/registerUser/RegisterUserController";

const authRouter = Router();
const registerUserController = new RegisterUserController();
authRouter.post("/register", registerUserController.handle);

export { authRouter };
