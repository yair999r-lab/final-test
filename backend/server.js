import express from "express"
import cors from "cors"

const PORT = process.env.PORT

const server = express()

server.use(express.json())
server.use(cors({origin: "*"}))




server.listen(PORT, () => {console.log("run on port " + PORT)})