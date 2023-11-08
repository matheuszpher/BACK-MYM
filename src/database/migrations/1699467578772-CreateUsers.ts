import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1699467578772 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "name", type: "varchar" },
                    { name: "email", type: "varchar" },
                    { name: "password", type: "varchar" },
                    { name: "monitor", type: "boolean" },
                    { name: "professor", type: "boolean" },
                    { name: "cadeiras", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "avaliacaoPendente", type: "boolean" },
                    { name: "ultimaAulaId", type: "varchar" },
                    { name: "ultimaAulaMonitor", type: "varchar" },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
