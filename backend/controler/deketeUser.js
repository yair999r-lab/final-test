import { ObjectId } from "mongodb"
import { myRepo } from "../dal/mongoRepo.js"

export async function deleteUser(req, res, next) {
    try {
         if(!req.user.role === "edmin"){
            const error = new Error("no auth to this router")
             error.ststus = 403
             throw(error)}

            const userId = new ObjectId(req.params.id)
        const result = await myRepo.deleteData(userId, "users")
        res.status(200).json({success: true, data: "user delete"})
    } catch (error) {
        next(error)
    }
}