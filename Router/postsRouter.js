import express from 'express';
import * as postController from '../Controller/postsController.js'
import { isAuth } from '../Middleware/auth.js';

export const postRouter = express.Router();


postRouter.get('/', postController.getAll)

postRouter.get('/popular', postController.getPopular)

postRouter.get('/:name', isAuth, postController.getByName)

postRouter.get('/myPosts/:id/:post_id', postController.getById)