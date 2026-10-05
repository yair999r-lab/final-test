import express from "express"
import { validPost, chackSchema } from "../middleware/validetor.js"
import { getAlerts } from "../controler/postCon.js"

const router = express.Router()

router.post("/alerts", chackSchema(validPost), getAlerts)

export default router