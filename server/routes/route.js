import express from 'express';

import {addUser,getUsers} from '../controller/user-controller.js';
import { newConversation ,getConversation} from '../controller/conversation-controller.js';
import {newMessage,getMessages} from '../controller/message-controller.js'
import {uploadFile} from '../controller/image-controller.js';
import {uploadTags,getTags,deleteTags,uploadSticker,upload} from '../controller/tags-controller.js';
// import upload from '../utils/upload.js'
import { getTextMessages } from '../controller/sentiment-controller.js';

const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);

route.post('/message/uploadtags',uploadTags);
route.post('/message/gettags',getTags);
route.get('/message/deletetags',deleteTags);

route.get('/sentiment/:id',getTextMessages);

route.post('/upload',upload.single('image'),uploadSticker)
// route.post('/file/upload',upload.single("file"),uploadFile);

export default route;