import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMonitoria1700622708478 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "monitorias",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "idMonitor", type: "uuid" },
                    { name: "cadeiraName", type: "varchar" },
                    { name: "horarioInicio", type: "timestamp" },
                    { name: "horarioFim", type: "timestamp" },
                    { name: "alunosCadastrados", type: "int", default: 0 },
                    { name: "sala", type: "varchar" },
                    { name: "obs", type: "text", isNullable: true },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("monitorias");
    }
}
