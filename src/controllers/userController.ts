import { Request, Response } from "express"
import UserModel from "../models/UserModel"

export const getAll = async (req: Request, res: Response) => {
    const users = await UserModel.findAll()
    res.send(users)
}

export const getUserById = async (
    req: Request<{ id: string }>, 
    res: Response) => {
    
        const user = await UserModel.findByPk(req.params.id)

        return res.json(user);
}