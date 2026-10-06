import { myRepo } from "../dal/mongoRepo.js"
import bcrypt from "bcrypt"

import { generateToken } from "../utils.js"
import { ObjectId } from "mongodb"

export async function login(req, res, next){
    try {
        const {id, password} = req.data
        
        const exists = await myRepo.findData({_id: new ObjectId(id)}, "users")
        if(!exists || exists.length === 0 ){
            return res.status(400).json({success: false, message: "user or password not good"})
        }
        const user = exists[0]
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({success: false, message: "user or password not good"})
        }
        
        const token = generateToken(user.userName, user._id.toString(), user.role)
        res.status(200).json({success: true, token})
    } catch (error) {
        next(error)
    }

}