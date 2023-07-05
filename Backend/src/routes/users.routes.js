import { Router } from "express";
import { getUsers, createUsers,getUserbyid,UpdateUser} from "../controllers/users.controller.js";

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserbyid)
router.post('/users', createUsers)
router.put('/users', UpdateUser)


export default router