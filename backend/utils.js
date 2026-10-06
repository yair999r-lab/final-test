import jwt from "jsonwebtoken"

export function generateToken(userName, userId, role){
    const token = jwt.sign({userId, userName, role}, process.env.JWT_SECRET, {expiresIn: "1h"})
    return token
}

