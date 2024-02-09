import exp from "constants";
import express, { Request, Response , Router} from "express";

const router: Router = express.Router()

import { hospitalScanners } from "../data/data";

router.get('', (req:Request, res: Response) => {
    res.status(200).json(hospitalScanners)
  })


export default router