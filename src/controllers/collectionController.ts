import { Request, Response } from "express"
import CollectionModel from "../models/CollectionModel"

// método que busca todos
export const getAll = async (req: Request, res: Response) => {
    const users = await CollectionModel.findAll()
    res.send(users)
}