import cors from 'cors';
import './config.js'

export const corsOptions = {
  origin: process.env.FRONT_END_URL, 
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
};

export const setupCors = (app) => {
  app.use(cors(corsOptions));
};
