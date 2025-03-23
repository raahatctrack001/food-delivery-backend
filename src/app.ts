import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import path from 'path';
import bcryptjs from 'bcryptjs';

const app = express();

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(cookieParser());



export default app;