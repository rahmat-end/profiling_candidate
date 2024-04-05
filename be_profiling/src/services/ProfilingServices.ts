import { Repository } from "typeorm"
import { Question } from "../entities/Question"
import { Profiling } from "../entities/Profiling"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { profilingSchema } from "../utils/ProfilingValidator"

export default new class ProfilingServices {
    private readonly QuestionRepository: Repository<Question> = AppDataSource.getRepository(Question)
    private readonly ProfilingRepository: Repository<Profiling> = AppDataSource.getRepository(Profiling)
    async find(req: Request, res: Response): Promise<Response> {
      try {
        const profiling = await this.ProfilingRepository.find({ 
          order: {
            id: "ASC" 
          },
          relations: {
            user: true,
          }
        })
        return res.status(200).json({
          status: "success",
          data: profiling,
          message: "Successfully! All record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding all profiling"})
      }
    }
  
    async findOne(req: Request, res: Response): Promise<Response> {
      try {
        const profiling = await this.ProfilingRepository.findOne({
          where: {
              user: JSON.parse(req.params.id)
          },
          relations: {
            user: true
          }
        })
        return res.status(200).json({
          status: "success",
          data: profiling,
          message: "Successfully! Record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding a spcific data profiling"})
      }
    }

    async randomize(req: Request, res: Response): Promise<Response> {
      try {
        const question = await this.QuestionRepository.findOne({
          where: {
              id: JSON.parse(req.params.id)
          }
        })

        // Function to shuffle array elements
        const shuffleArray = (array: any[]) => {
            for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }

        // Function to get random item from an array
        const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length * 10) % arr.length]

        const randomCandidate1: any = {}
        const randomCandidate2: any = {}

        for (const key in question) {
            if (Object.prototype.hasOwnProperty.call(question, key)) {
              const shuffledArray = shuffleArray([...question[key]])
              randomCandidate1[key] = getRandomItem(shuffledArray)
              randomCandidate2[key] = getRandomItem(shuffledArray)
            }
        }

        return res.status(200).json({
          status: "success",
          candidate_a: randomCandidate1,
          candidate_b: randomCandidate2,
          message: "Successfully! Record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding a spcific data profiling"})
      }
    }

    async add(req: Request, res: Response): Promise<Response> {
        try {
          const body = req.body
    
          const { error, value } = profilingSchema.validate(body)
          if(error) return res.status(400).json({ message: error.message })
    
          const obj = this.ProfilingRepository.create({
            randomize: value.randomize,
            choosen_candidate: value.choosen_candidate,
            answer_candidate_a: value.answer_candidate_a,
            answer_candidate_b: value.answer_candidate_b,
            user: value.userId
          })
    
          const profiling = await this.ProfilingRepository.save(obj)
          return res.status(200).json({
            status: "success",
            data: profiling,
            message: "Successfully! Record has been added"
          })
        } catch (err) {
          return res.status(500).json({ message: "Something error while inserting data profiling"})
        }
    }

    async countUser(req: Request, res: Response): Promise<Response> {
      try {
        const countUser = await this.ProfilingRepository
        .createQueryBuilder("profiling")
        .where("profiling.userId = :id", { id: req.params.id })
        .getCount()
        return res.status(200).json({
          status: "success",
          data: countUser,
          message: "Successfully! Record has been counted"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while counting data user"})
      }
    }

}