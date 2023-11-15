interface ICreateMonitor {
    id: string;
    tokenProfessor: string;
    IdCadeira: string;
}
interface IMonitorRepository {
    create({ id, tokenProfessor, IdCadeira }: ICreateMonitor): Promise<boolean>;
}

export { ICreateMonitor, IMonitorRepository };
