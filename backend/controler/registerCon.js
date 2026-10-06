import { myRepo } from "../dal/mongoRepo.js"
import { generateToken } from "../utils.js"

import bcrypt from "bcrypt"

export async function register(req, res ,next) {
    try {
        if(!req.user.role === "edmin"){
            const error = new Error("no auth to this router")
             error.ststus = 403
             throw(error)
        }

        const {password, userName, email, role, assignedArena} = req.data
        const hashPassword = bcrypt.hash(password, 12)
    
        const newUserId = await myRepo.insertData({userName, userName, email, role, assignedArena, password: hashPassword}, "users")
        const token = generateToken(userName, newUserId, role)
        res.status(201).json({success: true, token, userName, newUserId})
        
    } catch (error) {
        next(error)
    }
}