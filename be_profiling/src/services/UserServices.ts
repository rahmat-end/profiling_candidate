import { Repository } from "typeorm"
import { User } from "../entities/User"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { userAddSchema, userUpdateSchema } from "../utils/UserValidator"

export default new class UserServices {
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)
    async find(req: Request, res: Response): Promise<Response> {
      try {
        const user = await this.UserRepository.find({ 
          order: {
            id: "ASC" 
          },
          relations: {
            profilings: true
          }
        })
        return res.status(200).json({
          status: "success",
          data: user,
          message: "Successfully! All record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding all user"})
      }
    }
  
    async findOne(req: Request, res: Response): Promise<Response> {
      try {
        const user = await this.UserRepository.findOne({
          where: {
              id: JSON.parse(req.params.id)
          },
          relations: {
            profilings: true
          }
        })
        return res.status(200).json({
          status: "success",
          data: user,
          message: "Successfully! Record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding a spcific data user"})
      }
    }

    async search(req: Request, res: Response): Promise<Response> {
      try {
        const search = await this.UserRepository
        .createQueryBuilder("user")
        .orderBy("user.id", "ASC")
        .where("LOWER(user.name) like LOWER(:key)", { key: `%${req.params.key}%` })
        .orWhere("CAST(user.age AS TEXT) like :key", { key: `%${req.params.key}%` })
        .orWhere("LOWER(user.district) like LOWER(:key)", { key: `%${req.params.key}%` })
        .orWhere("LOWER(user.school) like LOWER(:key)", { key: `%${req.params.key}%` })
        .orWhere("LOWER(user.phone_number) like LOWER(:key)", { key: `%${req.params.key}%` })
        .orWhere("LOWER(user.gender) like LOWER(:key)", { key: `%${req.params.key}%` })
        .getMany();
  
        return res.status(200).json({
          status: "success",
          data: search,
          message: "Successfully! Record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding a data search by keyword"})
      }
  }

    async data_user(req: Request, res: Response): Promise<Response> {
      try {
        const user = await this.UserRepository.find({ 
          order: {
            id: "ASC" 
          }
        })
        return res.status(200).json({
          status: "success",
          data: user,
          message: "Successfully! All record has been fetched"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while finding all user"})
      }
    }

    async add(req: Request, res: Response): Promise<Response> {
        try {
          const body = req.body
    
          const { error, value } = userAddSchema.validate(body)
          if(error) return res.status(400).json({ message: error.message })
    
          const obj = this.UserRepository.create({
            name: value.name,
            age: value.age,
            district: value.district,
            school: value.school,
            phone_number: value.phone_number,
            gender: value.gender,
            question1: value.question1,
            question2: value.question2,
            question3: value.question3,
            question4: value.question4,
            question_video_ads: value.question_video_ads,
            question_banner: value.question_banner,
            question5: value.question5,
            question6: value.question6
          })
    
          const user = await this.UserRepository.save(obj)
          return res.status(200).json({
            status: "success",
            data: user,
            message: "Successfully! Record has been added"
          })
        } catch (err) {
          return res.status(500).json({ message: "Something error while inserting data user"})
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
      try {
        const body = req.body
  
        const { error, value } = userUpdateSchema.validate(body)
        if(error) return res.status(400).json({ message: error.message })
  
        const obj = this.UserRepository.create({
          question7: value.question7,
          question8: value.question8,
          question9: value.question9,
          question10: value.question10,
          question11: value.question11,
          updated_at: new Date
        })
  
        await this.UserRepository.update(req.params.id, obj)
        const user = await this.UserRepository.find({
          where: {
            id: JSON.parse(req.params.id)
          }
        })
        return res.status(200).json({
          status: "success",
          data: user,
          message: "Successfully! Record has been updated"
        })
      } catch (err) {
        return res.status(500).json({ message: "Something error while updating data user"})
      }
    }

}