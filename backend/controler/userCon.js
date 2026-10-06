import { ObjectId } from "mongodb";
import { myRepo } from "../dal/mongoRepo.js";

export async function getMe(req, res, next){
    try {
        const user = await myRepo.findData({_id: new ObjectId(req.user.userId)}, "users")
        if(!user | user.length === 0){
            return res.status(401).json({success: false, message: "you not in the system"})        
    }

    res.status(200).json({success: true, data: user[0]})
    } catch (error) {
        next(error)
    }

}

export async function getAll(req, res ,next) {
    try {
         if(!req.user.role === "edmin"){
            const error = new Error("no auth to this router")
             error.ststus = 403
             throw(error)}

        const users = await myRepo.findData({}, "users")
        res.status(200).json({success: true, data: users})
    } catch (error) {
        next(error)
    }
}