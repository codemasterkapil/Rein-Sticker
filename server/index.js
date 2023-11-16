import express from 'express';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Route from './routes/route.js'
import cors from 'cors';

const app=express();

//middlewares

app.use(cors());
app.use(bodyParser.json({extended:true,limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/',Route);

// connection to mongodb using mongoose
Connection();

const PORT=8000;

app.listen(PORT,()=>console.log(`the server is listening on port ${PORT}`))