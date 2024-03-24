import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Profiling } from "./Profiling"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    phone_number: string
    
    @Column({ nullable: true })
    question1: string

    @Column({ nullable: true })
    question2: string

    @Column({ nullable: true })
    question3: string

    @Column({ nullable: true })
    question4: string

    @Column({ nullable: true })
    question5: string

    @Column({ nullable: true })
    question6: string

    @Column({ nullable: true })
    question7: string

    @Column({ nullable: true })
    question8: string

    @Column({ nullable: true })
    question9: string

    @Column({ nullable: true })
    question10: string

    @Column({ nullable: true })
    question11: string

    @OneToMany(() => Profiling, (profiling) => profiling.user)
    profilings: Profiling[]

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: Timestamp

}
