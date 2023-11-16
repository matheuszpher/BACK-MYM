import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class alterTableAddActive1700136347788 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",

            new TableColumn({
                name: "active",

                type: "boolean",

                default: false,

                isNullable: false,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "active");
    }
}
