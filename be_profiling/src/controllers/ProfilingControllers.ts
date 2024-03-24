import { Request, Response } from "express"
import ProfilingServices from "../services/ProfilingServices"

export default new class ProfilingControllers {
  find(req: Request, res: Response) {
    ProfilingServices.find(req, res)
  }
  findOne(req: Request, res: Response) {
    ProfilingServices.findOne(req, res)
  }
  randomize(req: Request, res: Response) {
    ProfilingServices.randomize(req, res)
  }
  add(req: Request, res: Response) {
    ProfilingServices.add(req, res)
  }
  countUser(req: Request, res: Response) {
    ProfilingServices.countUser(req, res)
  }
}