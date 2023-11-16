import { Router } from "express";

import { ChangePasswordController } from "../modules/users/useCases/changePassword/ChangePasswordController";
import { RegisterUserController } from "../modules/users/useCases/registerUser/RegisterUserController";
import { ValidateUserController } from "../modules/users/useCases/validateUser/ValidateUserController";

const authRouter = Router();
const registerUserController = new RegisterUserController();
authRouter.post("/register", registerUserController.handle);
const validateUserController = new ValidateUserController();
authRouter.put("/validate", validateUserController.handle);
const changePasswordController = new ChangePasswordController();
authRouter.put("/changePassword", changePasswordController.handle);

export { authRouter };
