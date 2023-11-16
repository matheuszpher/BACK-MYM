import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import {
    IUserRepository,
    IChangePassword,
} from "../../repositories/IUserRepository";

@injectable()
class ChangePasswordUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {}
    async execute({ id, password }: IChangePassword): Promise<void> {
        const passwordHashed = await hash(password, 10);
        await this.userRepository.changePasswordById({
            id,
            password: passwordHashed,
        });
    }
}
export { ChangePasswordUseCase };
