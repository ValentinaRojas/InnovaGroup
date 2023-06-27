import { Router } from "express";
import { getUsers, createUsers,getUserbyid} from "../controllers/users.controller.js";

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserbyid)
router.post('/users', createUsers)


export default router