import { ObjectId } from "mongodb"
import { myRepo } from "../dal/mongoRepo.js"

export async function deleteAlert(req, res, next) {
    try {
        const alertId = new ObjectId(req.params.id)
        const deleteData = await myRepo.deleteData(alertId)
        res.status(200).json({success: true, message: "alert delete!"})
    } catch (error) {
        next(error)
    }
    
}