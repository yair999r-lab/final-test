import express from "express"

import { register } from "../controler/registerCon.js"
import { validUser, chackSchema } from "../middleware/validetor.js"
import { validAuth } from "../middleware/auth.js"

const router = express.Router("/api")

router.post("/auth/register",validAuth ,chackSchema(validUser), register)


export default router