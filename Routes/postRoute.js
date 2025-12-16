import express from 'express';
import { createPost , getPost, getUnapprovedPosts, approvePost, deletePost} from '../Controllers/postController.js';
import { authMiddleware, adminMiddleware } from '../Middleware/Middleware.js';
import upload from '../Config/Multer.js';


const router = express.Router();
// Routes for post operations
router.post('/create', authMiddleware,upload.single("image"),createPost);
router.get('/getpost', getPost);
router.get('/unapprovedPost', authMiddleware,adminMiddleware, getUnapprovedPosts);
router.patch('/:id/approve', authMiddleware,adminMiddleware, approvePost);
router.delete('/delete/:id', adminMiddleware, deletePost);


export default router;