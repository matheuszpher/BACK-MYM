import { hash } from "bcrypt";
import { container, inject, injectable } from "tsyringe";

import { IMonitorRepository } from "../../repositories/IMonitorRepository";
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
        @inject("MonitorRepository")
        private monitorRepository: IMonitorRepository,
    ) {}
    async execute({
        name,
        email,
        password,
        monitor,
        professor,
        token,
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
            token,
        });
        if (professor) {
            const user = await this.userRepository.findByEmail(email);
            await this.professorRepository.create({
                id: user.id,
                token,
                monitoresId: "",
            });
        }
        if (monitor) {
            const user = await this.userRepository.findByEmail(email);
            const monitor = this.monitorRepository.create({
                id: user.id,
                IdCadeira: "",
                tokenProfessor: token,
            });
            if (!monitor) {
                throw new Error("Token invalid");
            }
        }
        const emailSenderService = container.resolve(EmailSenderService);
        emailSenderService.execute({
            email,
            body: "<h1> Bem Vindo A Nossa Aplicação </h1>",
        });
    }
}

export { RegisterUserUseCase };
