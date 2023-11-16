import { Router } from "express";

import { RegisterUserController } from "../modules/users/useCases/registerUser/RegisterUserController";
import { ValidateUserController } from "../modules/users/useCases/validateUser/ValidateUserController";

const authRouter = Router();
const registerUserController = new RegisterUserController();
authRouter.post("/register", registerUserController.handle);
const validateUserController = new ValidateUserController();
authRouter.post("/validate", validateUserController.handle);

export { authRouter };
