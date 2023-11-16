
import Message from '../model/Message.js';

export const getTextMessages=async(req,res)=>{
    try{
        const messages=await Message.find({senderId:req.params.id,type:'text'});
        return  res.status(200).json(messages);  
     }catch(error){
        return res.status(500).json(error.message);
     }
}