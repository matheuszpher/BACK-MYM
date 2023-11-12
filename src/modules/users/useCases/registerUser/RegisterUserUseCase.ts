import { hash } from "bcrypt";
import { container, inject, injectable } from "tsyringe";

import { IProfessorRepository } from "../../repositories/IProfessorRepository";
import {
    IUserRepository,
    ICreateUser,
} from "../../repositories/IUserRepository";
import { EmailSenderService } from "../../services/EmailSenderService";

@injectable()
class RegisterUserUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
        @inject("ProfessorRepository")
        private professorRepository: IProfessorRepository,
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
        if (professor) {
            const user = await this.userRepository.findByEmail(email);
            await this.professorRepository.create({
                id: user.id,
                token: "",
                monitoresId: "",
            });
        }
        const emailSenderService = container.resolve(EmailSenderService);
        emailSenderService.execute({
            email,
            body: "<h1> Bem Vindo A Nossa Aplicação </h1>",
        });
    }
}

export { RegisterUserUseCase };
