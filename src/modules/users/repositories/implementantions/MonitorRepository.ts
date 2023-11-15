import { injectable, inject } from "tsyringe";
import { Repository, getRepository } from "typeorm";

import { Monitor } from "../../entities/Monitor";
import { ICreateMonitor, IMonitorRepository } from "../IMonitorRepository";
import { IProfessorRepository } from "../IProfessorRepository";
import { IUserRepository } from "../IUserRepository";

@injectable()
class MonitorRepository implements IMonitorRepository {
    private repository: Repository<Monitor>;
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
        @inject("ProfessorRepository")
        private professorRepository: IProfessorRepository,
    ) {
        this.repository = getRepository(Monitor);
    }

    async create({
        id,
        tokenProfessor,
        IdCadeira,
    }: ICreateMonitor): Promise<boolean> {
        const tokenExists =
            await this.professorRepository.findByToken(tokenProfessor);
        if (!tokenExists) {
            return false;
        }
        const monitor = this.repository.create({
            id,
            tokenProfessor,
            IdCadeira,
            nota: 0,
            totalAvaliacoes: 0,
            badges: "",
        });
        await this.repository.save(monitor);
        return true;
    }
}
export { MonitorRepository };
