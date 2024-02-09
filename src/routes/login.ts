import express, { Express, Router, Request, Response } from "express";

import { user } from "../data/data";

const router: Router = express.Router()


router.post('', (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    if (email !== user.email || password !== user.password) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
  
    return res.status(200).json({ message: "Login Successful" });
  });

export default router