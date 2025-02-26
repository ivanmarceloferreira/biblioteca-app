import express from 'express'
import { getAll } from '../controllers/userController'

const router = express.Router();

router.get('/users', getAll)

export default router;