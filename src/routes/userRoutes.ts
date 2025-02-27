import express from 'express'
import { getAll, 
    getUserById,
    createUser,
    updateUser } from '../controllers/userController'

const router = express.Router();

router.get('/users', getAll)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)

export default router;