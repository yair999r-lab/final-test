import jwt from "jsonwebtoken"

export function validAuth(req, _res, next){
    const auth = req.headers.authorization
    if(!auth || !auth.startsWith("Bearer")){
        const error = new Error("no token send")
        error.status = 401
        throw(error)
    }
    const token = auth.split(" ")[1]
    try {
        const decodet = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodet
    } catch (error) {
        const err = new Error("No access permissions")
        err.status = 403
        throw(err)
    }
    next()

}