import { hash } from "bcrypt";
import { container, inject, injectable } from "tsyringe";

import { IUserRepository, ICreateUser } from "../repositories/IUserRepository";
import { EmailSenderService } from "../services/EmailSenderService";

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
        const emailSenderService = container.resolve(EmailSenderService);
        emailSenderService.execute({
            email,
            body: "<h1> Bem Vindo A Nossa Aplicação </h1>",
        });
    }
}

export { RegisterUserUseCase };
