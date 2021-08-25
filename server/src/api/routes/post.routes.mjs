import express from "express";
import { getPost } from "../controller/post.controller.mjs";
import { createPost } from "../controller/post.controller.mjs";
import { deletePost } from "../controller/post.controller.mjs";
import { getAllPosts } from "../controller/post.controller.mjs";
import { checkAuth } from "../middleware/checkAuth.mjs";
const router = express.Router();



router.post ('/', checkAuth, createPost)
router.get ('/:id', getPost)
router.get ('/', getAllPosts)
router.delete ('/:id', checkAuth, deletePost)

export default router 
