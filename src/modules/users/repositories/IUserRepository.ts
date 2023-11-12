import { User } from "../entities/User";

interface ICreateUser {
    name: string;
    email: string;
    password: string;
    monitor: boolean;
    professor: boolean;
}

interface IUserRepository {
    findById(id: string): Promise<User>;
    create({
        name,
        email,
        password,
        monitor,
        professor,
    }: ICreateUser): Promise<void>;
    findByEmail(email: string): Promise<User>;
}
export { ICreateUser, IUserRepository };
