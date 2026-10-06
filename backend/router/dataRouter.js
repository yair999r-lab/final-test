import express from "express"
import { validPost, chackSchema, validUpdate } from "../middleware/validetor.js"
import { getAlerts } from "../controler/postCon.js"
import { updateAlert } from "../controler/updateCon.js"
import { deleteAlert } from "../controler/deleteCon.js"
import { validAuth } from "../middleware/auth.js"

const router = express.Router()

router.post("/alerts",validAuth, chackSchema(validPost), getAlerts)
router.put("/alerts/:id",validAuth, chackSchema(validUpdate), updateAlert)
router.delete("/alerts/:id",validAuth, deleteAlert)

export default router