import express from "express"

import { validUser, chackSchema } from "../middleware/validetor.js"

const router = express.Router("/api")

router.post("auth/login",chackSchema(validUser), login)


export default router