import { ObjectId } from "mongodb"
import { myRepo } from "../dal/mongoRepo.js"

export async function showAlerts(req, res, next){
    try {
        let filter = {}
        const alertId = req.params.id

        if(alertId){
            filter._id = new ObjectId(alertId)
        }
        
        const allAlerts = await myRepo.findData(filter, "alerts")
        res.status(200).json({success: true, data: allAlerts})
    } catch (error) {
        next(error)
    }
}
