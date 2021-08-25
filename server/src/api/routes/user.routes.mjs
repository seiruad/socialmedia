import express from "express";
import { getMyPage } from "../controller/user.controller.mjs";
import { getUser } from "../controller/user.controller.mjs";
import { getAllUsers } from "../controller/user.controller.mjs";
import { checkAuth } from "../middleware/checkAuth.mjs";
const router = express.Router();



router.get ('/me', checkAuth, getMyPage)
router.get ('/', checkAuth, getAllUsers)
router.get ('/:id', checkAuth, getUser)


export default router 
