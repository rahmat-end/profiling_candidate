import { Repository } from "typeorm"
import { Question } from "../entities/Question"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"

export default new class QuestionServices {
    private readonly QuestionRepository: Repository<Question> = AppDataSource.getRepository(Question)
    async find(req: Request, res: Response): Promise<Response> {
      try {
        const question = await this.QuestionRepository.find({ 
          order: {
            id: "ASC" 
          }
        })
        return res.status(200).json({
          status: "success",
          data: question,
          message: "Successfully! All record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding all question"})
      }
    }
  
    async findOne(req: Request, res: Response): Promise<Response> {
      try {
        const question = await this.QuestionRepository.findOne({
          where: {
              id: JSON.parse(req.params.id)
          }
        })
        return res.status(200).json({
          status: "success",
          data: question,
          message: "Successfully! Record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding a spcific data question"})
      }
    }

}