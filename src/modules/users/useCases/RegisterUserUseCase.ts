import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUserRepository, ICreateUser } from "../repositories/IUserRepository";

@injectable()
class RegisterUserUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {}
    async execute({
        name,
        email,
        password,
        monitor,
        professor,
    }: ICreateUser): Promise<void> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);
        if (emailAlreadyExists) {
            throw new Error("Email is already been used");
        }
        const passwordHashed = await hash(password, 10);
        await this.userRepository.create({
            name,
            email,
            password: passwordHashed,
            monitor,
            professor,
        });
    }
}

export { RegisterUserUseCase };
