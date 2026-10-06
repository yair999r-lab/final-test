import { ObjectId } from "mongodb"
import { myRepo } from "../dal/mongoRepo.js"
import { da } from "zod/v4/locales"

export async function updateAlert(req, res, next) {
    try {
        const alertId = new ObjectId(req.params.id)
        const dataToUpdate = req.data
        const updateAlert = await myRepo.updateData(alertId, dataToUpdate, "alerts") 
        res.status(200).json({success: true, alert: updateAlert, alertId})
    } catch (error) {
        next(error)
    }
}