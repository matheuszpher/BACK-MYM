import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMonitores1699487110274 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "monitor",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "tokenProfessor", type: "varchar" },
                    { name: "IdCadeira", type: "varchar" },
                    { name: "nota", type: "float" },
                    { name: "totalAvaliacoes", type: "int" },
                    { name: "badges", type: "varchar" },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("monitor");
    }
}
