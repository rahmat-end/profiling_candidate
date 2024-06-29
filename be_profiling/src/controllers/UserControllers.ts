import { Request, Response } from "express"
import UserServices from "../services/UserServices"

export default new class UserControllers {
  find(req: Request, res: Response) {
    UserServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    UserServices.findOne(req, res)
  }
  search(req: Request, res: Response) {
    UserServices.search(req, res)
  }
  data_user(req: Request, res: Response) {
    UserServices.data_user(req, res)
  }
  add(req: Request, res: Response) {
    UserServices.add(req, res)
  }
  update(req: Request, res: Response) {
    UserServices.update(req, res)
  }
}