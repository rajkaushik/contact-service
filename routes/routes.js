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

router.get('/contacts/:id', VerifyTokenMiddleware, FindContact);
router.get('/contacts/', VerifyTokenMiddleware, FindAllContact);
router.delete('/contacts/:id', VerifyTokenMiddleware, DeleteContact);
router.post('/contacts', VerifyTokenMiddleware, AddContact);
router.put('/contacts', VerifyTokenMiddleware, UpdateContact);


export default router;