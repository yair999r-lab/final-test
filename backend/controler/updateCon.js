import { ObjectId } from "mongodb"
import { myRepo } from "../dal/mongoRepo.js"

export async function updateAlert(req, res, next) {
    try {
        console.log(req.param)
        const alertId = new ObjectId(req.params.id)
        const dataToUpdate = req.data

        const updateAlert = await myRepo.updateData(alertId, dataToUpdate)
        res.status(200).json({success: true, alert: updateAlert, alertId})
    } catch (error) {
        next(error)
    }
}