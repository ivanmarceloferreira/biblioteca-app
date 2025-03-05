import express from 'express'
import { getAll } from '../controllers/bookController'

const router = express.Router();

router.get('/users', getAll)

export default router;