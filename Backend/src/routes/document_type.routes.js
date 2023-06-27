import { Router } from "express";
import { getDocumentType } from "../controllers/document_type.controller.js";

const router = Router()

router.get('/document_type', getDocumentType)


export default router