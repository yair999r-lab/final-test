import express from "express"
import { validPost, chackSchema, validUpdate } from "../middleware/validetor.js"
import { getAlerts } from "../controler/postCon.js"
import { updateAlert } from "../controler/updateCon.js"

const router = express.Router()

router.post("/alerts", chackSchema(validPost), getAlerts)
router.put("/alerts/:id", chackSchema(validUpdate), updateAlert)

export default router