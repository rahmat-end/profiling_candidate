import * as express from "express"
import UserControllers from "../controllers/UserControllers"
import QuestionControllers from "../controllers/QuestionControllers"
import ProfilingControllers from "../controllers/ProfilingControllers"

const router = express.Router()

router.get("/users", UserControllers.find)
router.get("/user/:id", UserControllers.findOne)
router.post("/addUser", UserControllers.add)

router.get("/questions", QuestionControllers.find)
router.get("/question/:id", QuestionControllers.findOne)

router.get("/profilings", ProfilingControllers.find)
router.get("/profiling/:id", ProfilingControllers.findOne)
router.get("/randomize/:id", ProfilingControllers.randomize)
router.get("/countUser/:id", ProfilingControllers.countUser)
router.post("/addProfiling", ProfilingControllers.add)

export default router