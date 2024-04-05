import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { User } from "./User"

@Entity()
export class Profiling {

    @PrimaryGeneratedColumn()
    id: number

    @Column('jsonb', { nullable: true })
    randomize: object

    @Column({ nullable: true })
    choosen_candidate: string

    @Column({ nullable: true })
    answer_candidate_a: number

    @Column({ nullable: true })
    answer_candidate_b: number

    @ManyToOne(() => User, (user) => user.profilings)
    user: User

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: Timestamp

}
