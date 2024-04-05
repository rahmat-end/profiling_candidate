import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { ProfilingCandidate1711926870626 } from "./migrations/1711926870626-Profiling_Candidate"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: JSON.parse(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ['src/entities/*.ts'],
    migrations: [ProfilingCandidate1711926870626],
    subscribers: [],
})
