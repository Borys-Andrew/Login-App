import express from 'express';
import * as authController from '../controllers/auth.js';

export const router = express.Router();

router.get('/', authController.auth);
