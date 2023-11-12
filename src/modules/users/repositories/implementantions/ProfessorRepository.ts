import { injectable, inject } from "tsyringe";
import { Repository, getRepository } from "typeorm";

import { Professor } from "../../entities/Professor";
import { User } from "../../entities/User";
import {
    ICreateProfessor,
    IProfessorRepository,
} from "../IProfessorRepository";
import { IUserRepository } from "../IUserRepository";

@injectable()
class ProfessorRepository implements IProfessorRepository {
    private repository: Repository<Professor>;
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {
        this.repository = getRepository(Professor);
    }
    async create({ id, token, monitoresId }: ICreateProfessor) {
        const professor = this.repository.create({
            id,
            token,
            monitoresId,
        });
        await this.repository.save(professor);
    }
    async getProfessorUser(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);
        return user;
    }
}
export { ProfessorRepository };
