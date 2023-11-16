import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ValidateUserUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {}
    async execute(id: string) {
        await this.userRepository.validateById(id);
    }
}
export { ValidateUserUseCase };
