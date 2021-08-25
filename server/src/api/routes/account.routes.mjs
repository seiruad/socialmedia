import express from "express";
import { deleteAccount } from "../controller/account.controller.mjs";
import { login } from "../controller/account.controller.mjs";
import { register } from "../controller/account.controller.mjs";
import { changeAboutInfo } from "../controller/user-profile.controller.mjs";
import { checkAuth } from "../middleware/checkAuth.mjs";
const router = express.Router();


router.post ('/create', register)
router.post ('/enter', login)
router.post ('/delete', checkAuth, deleteAccount)
router.put ('/about', checkAuth, changeAboutInfo)



export default router
