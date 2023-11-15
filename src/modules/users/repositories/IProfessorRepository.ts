import { Professor } from "../entities/Professor";
import { User } from "../entities/User";

interface ICreateProfessor {
    id: string;
    token: string;
    monitoresId: string;
}
interface IProfessorRepository {
    create({ id, token, monitoresId }: ICreateProfessor): Promise<void>;
    getProfessorUser(id: string): Promise<User>;
    findByToken(token: string): Promise<Professor>;
}
export { IProfessorRepository, ICreateProfessor };
