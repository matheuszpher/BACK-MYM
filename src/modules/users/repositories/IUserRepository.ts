import { User } from "../entities/User";

interface ICreateUser {
    id: string;
    name: string;
    email: string;
    password: string;
    monitor: boolean;
    professor: boolean;
    token: string;
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
    validateById(id: string): Promise<void>;
}
export { ICreateUser, IUserRepository };
