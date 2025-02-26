import express from 'express'
import { getAll, getUserById } from '../controllers/userController'

const router = express.Router();

router.get('/users', getAll)
router.get('/users/:id', getUserById)

export default router;