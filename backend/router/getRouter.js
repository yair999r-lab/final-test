import express from "express"
import { showAlerts } from "../controler/getCon.js"

const router = express.Router()

router.get("/alerts", showAlerts)
router.get("/alerts/:id", showAlerts)


export default router