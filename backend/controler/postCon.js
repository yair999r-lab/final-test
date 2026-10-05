import { myRepo } from "../dal/mongoRepo.js"

export async function getAlerts(req, res, next){
    try {
        const alert = req.data
         const newAlert = await myRepo.insertData(alert)
        res.status(201).json({success: true, alert, alertId: newAlert.toString()})
    } catch (error) {
        next(error)
    }
    
}