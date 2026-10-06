import jwt from "jsonwebtoken"

export function validAuth(req, _res, next){
    const token = req.headers.Authorization

    if(!token || !token.startsWith("Bearer")){
        const error = new Error("no token send")
        error.status = 401
        throw(error)
    }

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