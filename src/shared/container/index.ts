import { container } from "tsyringe";

import { IMonitorRepository } from "../../modules/users/repositories/IMonitorRepository";
import { MonitorRepository } from "../../modules/users/repositories/implementantions/MonitorRepository";
import { ProfessorRepository } from "../../modules/users/repositories/implementantions/ProfessorRepository";
import { UserRepository } from "../../modules/users/repositories/implementantions/UserRepository";
import { IProfessorRepository } from "../../modules/users/repositories/IProfessorRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IProfessorRepository>(
    "ProfessorRepository",
    ProfessorRepository,
);
container.registerSingleton<IMonitorRepository>(
    "MonitorRepository",
    MonitorRepository,
);
