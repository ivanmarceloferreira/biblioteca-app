import express from 'express'
import { getAll } from '../controllers/collectionController'

const router = express.Router();

router.get('/collections', getAll)

export default router;