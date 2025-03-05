import { Request, Response } from "express"
import BookModel from "../models/BookModel"

// método que busca todos
export const getAll = async (req: Request, res: Response) => {
    const users = await BookModel.findAll()
    res.send(users)
}