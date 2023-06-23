import { Router } from "express";
import { getUsers, createUsers,} from "../controllers/users.controller.js";

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUsers)


export default router