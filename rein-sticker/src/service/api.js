import axios from 'axios';

const url='http://localhost:8000/';

export const addUser=async(data)=>{
   try{
      await axios.post(url+'add',data);
   }catch(error){
      console.log('Error while addUser api',error.message);
   }
}

export const getUsers=async()=>{
   try{
      const response=await axios.get(`${url}users`);
      console.log(response);
      return response.data;
   }catch(error){
      console.log('error while calling getUsers api',error.message);
   }
}

export const setConversation=async(data)=>{
     try{
         await axios.post(url+'conversation/add',data)
     }catch(error){
        console.log('error while calling setConversation api',error.message);
     }
}

export const getConversation=async(data)=>{
   try{
       const response=await axios.post(url+'conversation/get',data);
       return response.data;
   }catch(error){
      console.log('error while calling getConversation api',error.message);
   }
}  

export const newMessage=async(data)=>{
   try{
       const response=await axios.post(url+'message/add',data);
       return response.data;
   }catch(error){
      console.log('error while calling newMessage api',error.message);
   }
}

export const getMessages=async(id)=>{
   try{
       const response=await axios.get(url+`message/get/${id}`);
       return response.data;
   }catch(error){
       console.log('error while calling getMessage api',error.message);
   }
}

export const uploadFile=async(data)=>{
   try{
       return await axios.post(url+`file/upload`,data);
   }catch(error){
      console.log('error while calling uploadFile api',error.message);
   }
}

export const recommendStickers=async(data)=>{
   try{
       return await axios.post(url+`message/gettags`,data);
   }catch(error){
      console.log('error while calling uploadFile api',error.message);
   }
}

export const UploadStickers=async(data)=>{
   try{
       return await axios.post(url+`message/uploadtags`,data);
      console.log("tarun")
   }catch(error){
       console.log('error while calling uploadStcikers api',error.message);
   }
}

