import express from 'express';
import { createBusiness, getBusinesses } from '../controllers/businessesController.js';

const router = express.Router();

router.post('/', createBusiness);
router.get('/', getBusinesses);

export default router;
