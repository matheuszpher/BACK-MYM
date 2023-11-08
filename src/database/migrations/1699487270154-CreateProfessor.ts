import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfessor1699487270154 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "professor",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "token", type: "varchar" },
                    { name: "monitoresId", type: "varchar" },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("professor");
    }
}
