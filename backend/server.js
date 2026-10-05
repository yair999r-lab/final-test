import express from "express"
import cors from "cors"
import dataRouter from "./router/dataRouter.js"

const PORT = process.env.PORT

const server = express()

server.use(express.json())
server.use(cors({origin: "*"}))


server.use("/api",dataRouter)

server.use((err, _req, res, _next) => {
    const statusCod = err.status || 500
    const message = err.message || "Internal Server Error"
    res.status(statusCod).json({success: false, message: message})
})

server.listen(PORT, () => {console.log("run on port " + PORT)})