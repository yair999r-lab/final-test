import express from "express"
import { showAlerts } from "../controler/getCon.js"
import { validAuth } from "../middleware/auth.js"

const router = express.Router()

router.get("/alerts",validAuth, showAlerts)
router.get("/alerts/:id",validAuth, showAlerts)


export default router