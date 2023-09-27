import express from 'express';
import { body } from 'express-validator';
import { validate } from '../Middleware/validator.js';
import * as authController from '../Controller/authController.js'

export const authRouter = express.Router();

const validateSignUp = [
  body('nickname').trim()
    .notEmpty().withMessage('nickname is missing!')
    .isLength({ min: 3, max: 12 }).withMessage('text should be at least 3 characters')
  , body('password').trim()
    .notEmpty().withMessage('password is missing!')
    .isLength({ min: 8, max: 15 }).withMessage('password is missing!')
  , body('name').trim()
    .notEmpty().withMessage('name is missing!')
    .isLength({ min: 3, max: 8 }).withMessage('text should be at least 3 characters')
  , body('email').trim()
    .notEmpty().withMessage('email is missing!')
    .isEmail().withMessage('password is missing!')
  , validate
]


const validateSignIn = [
  body('nickname').trim()
    .notEmpty().withMessage('nickname is missing!')
    .isLength({ min: 3, max: 12 }).withMessage('text should be at least 3 characters')
  , body('password').trim()
    .notEmpty().withMessage('password is missing!')
    .isLength({ min: 8, max: 15 }).withMessage('password is missing!')
  , validate
]

authRouter.post('/signup', validateSignUp, authController.signUp)

authRouter.post('/signin', validateSignIn, authController.signIn)