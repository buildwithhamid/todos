import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsersAndTodoUserId1770041855022 implements MigrationInterface {
    name = 'AddUsersAndTodoUserId1770041855022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`passwordHash\` varchar(255) NOT NULL, \`name\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`todos\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`todos\` ADD CONSTRAINT \`FK_4583be7753873b4ead956f040e3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todos\` DROP FOREIGN KEY \`FK_4583be7753873b4ead956f040e3\``);
        await queryRunner.query(`ALTER TABLE \`todos\` DROP COLUMN \`userId\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
