// src/index.ts
import express, { Request, Response } from 'express';

interface Scanner {
  id: string;
  name: string;
  status: string;
  price: number;
  imageUrl: string;
  description: string;
}


interface User {
  email: string;
  password: string;
}

const app = express();
const port = 3000;




app.use('/api/scanners', )
app.use('/api/hospital/scanners')
app.use('/api/login')




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
