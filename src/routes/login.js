import express from 'express';
import * as loginController from '../controllers/login.js';

export const router = express.Router();

router.post('/', loginController.login);
