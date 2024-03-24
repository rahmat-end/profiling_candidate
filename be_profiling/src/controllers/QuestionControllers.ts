import { Request, Response } from "express"
import QuestionServices from "../services/QuestionServices"

export default new class QuestionControllers {
  find(req: Request, res: Response) {
    QuestionServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    QuestionServices.findOne(req, res)
  }
}