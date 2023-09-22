
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const Connection=async ()=>{
    
    const db_password=process.env.DB_PASSWORD;
    const db_username=process.env.DB_USERNAME;

    const URL=`mongodb+srv://${db_username}:${db_password}@rein-sticker.gq7b4r9.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL,{
        useUnifiedTopology: true,
      }); 
      console.log('database conected');
    }catch(error){
      console.log('error while connecting to the databse',error);
    }

}

export default Connection;
