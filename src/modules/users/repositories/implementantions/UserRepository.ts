import { injectable } from "tsyringe";
import { Repository, getRepository } from "typeorm";

import { User } from "../../entities/User";
import { IUserRepository, ICreateUser } from "../IUserRepository";

@injectable()
class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ id });
        return user;
    }

    async create({
        name,
        email,
        password,
        monitor,
        professor,
    }: ICreateUser): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            monitor,
            professor,
            cadeiras: "",
            avaliacaoPendente: false,
            ultimaAulaId: "",
            ultimaAulaMonitor: "",
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }
}
export { UserRepository };
