import { myRepo } from "../dal/mongoRepo.js"

import bcrypt from "bcrypt"

export async function register(req, res ,next) {
    try {
        if(!req.user.role === "edmin"){
            const error = new Error("no auth to this router")
             error.ststus = 403
             throw(error)
        }

        const {password, userName, email, role, assignedArena} = req.data
        const hashPassword = await bcrypt.hash(password, 12)
    
        const newUserId = await myRepo.insertData({userName, userName, email, role, assignedArena, password: hashPassword}, "users")
        res.status(201).json({success: true, userName, newUserId})
    } catch (error) {
        next(error)
    }
}