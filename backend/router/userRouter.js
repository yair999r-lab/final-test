import express from "express"

import { register } from "../controler/registerCon.js"
import { validUser, chackSchema, validLogin } from "../middleware/validetor.js"
import { validAuth } from "../middleware/auth.js"
import { login } from "../controler/loginCon.js"
import { getMe, getAll } from "../controler/userCon.js"
import { deleteUser } from "../controler/deketeUser.js"

const router = express.Router("/api")

router.post("/auth/register", validAuth,chackSchema(validUser), register)
router.post("/auth/login", chackSchema(validLogin), login)
router.get("/auth/me", validAuth, getMe)
router.get("/auth/all", validAuth, getAll)
router.delete("/auth/users/:id", validAuth, deleteUser)

export default router