import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number

    @Column('jsonb', { nullable: true })
    dimensions1_medsos: object

    @Column('jsonb', { nullable: true })
    dimensions2_medsos: object

    @Column('jsonb', { nullable: true })
    dimensions1_campaign: object

    @Column('jsonb', { nullable: true })
    dimensions2_campaign: object

    @Column('jsonb', { nullable: true })
    residence: object

    @Column('jsonb', { nullable: true })
    ageism: object

    @Column('jsonb', { nullable: true })
    incumbency: object

    @Column('jsonb', { nullable: true })
    education: object

    @Column('jsonb', { nullable: true })
    party: object

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: Timestamp

}
