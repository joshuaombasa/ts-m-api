// src/index.ts
import express from 'express';
import {router as loginRouter} from './routes/login'
import {router as hospitalRouter} from './routes/login'
import {router as scannersRouter} from './routes/login'


const app = express();
const port = 3000;




app.use('/api/scanners', scannersRouter)
app.use('/api/hospital/scanners', hospitalRouter)
app.use('/api/login', loginRouter)




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
