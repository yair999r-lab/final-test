import express from "express"

import { register } from "../controler/registerCon.js"
import { validUser, chackSchema, validLogin } from "../middleware/validetor.js"
import { validAuth } from "../middleware/auth.js"
import { login } from "../controler/loginCon.js"

const router = express.Router("/api")

router.post("/auth/register", validAuth,chackSchema(validUser), register)
router.post("/auth/login", chackSchema(validLogin), login)


export default router