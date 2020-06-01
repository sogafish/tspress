import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1590999334303 implements MigrationInterface {
    name = 'CreateUsers1590999334303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `age` int NOT NULL, `status` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
    }

}
