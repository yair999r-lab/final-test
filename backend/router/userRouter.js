import express from "express"

import { register } from "../controler/registerCon.js"
import { validUser, chackSchema, validLogin } from "../middleware/validetor.js"
import { validAuth } from "../middleware/auth.js"
import { login } from "../controler/loginCon.js"
import { getMe } from "../controler/userCon.js"

const router = express.Router("/api")

router.post("/auth/register", validAuth,chackSchema(validUser), register)
router.post("/auth/login", chackSchema(validLogin), login)
router.get("/auth/me", validAuth, getMe)

export default router