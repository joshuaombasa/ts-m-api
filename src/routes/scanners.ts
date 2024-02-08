import express, { Express, Router, Request, Response } from "express";

import { hospitals } from "../data/data";

const router: Router = express.Router()

router.get(`/api/scanners`, (req: Request, res: Response) => {
    res.status(200).json(hospitals);
});

router.get(`/api/scanners/:id`, (req: Request, res: Response) => {
    const { id } = req.params;
    const selectedVan = hospitals.find(hospital => hospital.id === id);
    if (selectedVan) {
        res.status(200).json(selectedVan);
    } else {
        res.status(404).json({ message: "Scanner not found" });
    }
});

export default router