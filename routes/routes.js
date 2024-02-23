import express from 'express';
import { VerifyTokenMiddleware } from '../auth/jwt.js';
import {
    FindContact,
    AddContact,
    DeleteContact,
    UpdateContact, 
    FindAllContact
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/contact/:id', VerifyTokenMiddleware, FindContact);
router.get('/contact/', VerifyTokenMiddleware, FindAllContact);
router.delete('/contact/:id', VerifyTokenMiddleware, DeleteContact);
router.post('/contact', VerifyTokenMiddleware, AddContact);
router.put('/contact', VerifyTokenMiddleware, UpdateContact);

export default router;