import multer from 'multer';

import {GridFsStorage} from 'multer-gridfs-storage';

import dotenv from 'dotenv';
dotenv.config();

const db_password=process.env.DB_PASSWORD;
const db_username=process.env.DB_USERNAME;

const URL=`mongodb+srv://${db_username}:${db_password}@rein-sticker.gq7b4r9.mongodb.net/?retryWrites=true&w=majority`;

const storage = new GridFsStorage({ 
    //   url:URL ,
    //   file: (req, file) => {
    //     const match=['image/jpeg', 'image/jpg', 'image/png']
        
    //     if(match.indexOf(file.mimeType)===-1){
    //        return `${Date.now()}-file-${file.originalname}`;
    //     }

    //     return {
    //          bucketName:"photos",
    //          filename:`${Date.now()}-file-${file.originalname}`
    //     }

    //   }       
      url: `mongodb+srv://${db_username}:${db_password}@rein-sticker.gq7b4r9.mongodb.net/?retryWrites=true&w=majority`,
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage });