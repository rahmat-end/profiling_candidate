import { MigrationInterface, QueryRunner } from "typeorm";

export class ProfilingCandidate1708332323852 implements MigrationInterface {
    name = 'ProfilingCandidate1708332323852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profiling" ("id" SERIAL NOT NULL, "dimensions1_medsos" jsonb, "dimensions2_medsos" jsonb, "dimensions1_campaign" jsonb, "dimensions2_campaign" jsonb, "ageism" jsonb, "incumbency" jsonb, "education" jsonb, "party" jsonb, "answer" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_0cb560fa47c7f91116e3216dcd4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "phone_number" character varying NOT NULL, "question1" character varying, "question2" character varying, "question3" character varying, "question4" character varying, "question5" character varying, "question6" character varying, "question7" character varying, "question8" character varying, "question9" character varying, "question10" character varying, "question11" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question" ("id" SERIAL NOT NULL, "dimensions1_medsos" jsonb, "dimensions2_medsos" jsonb, "dimensions1_campaign" jsonb, "dimensions2_campaign" jsonb, "ageism" jsonb, "incumbency" jsonb, "education" jsonb, "party" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "profiling" ADD CONSTRAINT "FK_97684e2ee5db941dff8a967b65b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiling" DROP CONSTRAINT "FK_97684e2ee5db941dff8a967b65b"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "profiling"`);
    }

}
