
import {imageObjects} from './data.js'
import Dataset from '../model/dataset.js';
import {getAllKeyWords} from '../machinelearning/keyword_extraction.js';
import {getSentiment} from '../machinelearning/sentimental_analysis.js';

export const uploadTags=async(req,res)=>{
   try{
        for (const obj of imageObjects) {
            const dataObject = new Dataset(obj);
            dataObject.save();        
         }
        return res.status(200).json("objects are uploaded successfully")
        
   }catch(error){
        return res.status(500).json("error in uploading objects")
   }
}

export const getTags=async(req,res)=>{

    try{
          const text=req.body.text;
          const keywords=getAllKeyWords(text);
          const sentiments=getSentiment(text);
          keywords.push(sentiments);
          const result=await Dataset.find({ Tags: { $in: keywords }});
          return res.status(200).json(result);

    }catch(error){
         return res.status(500).json(error);
    }
}

export const deleteTags=async(req,res)=>{
    try{
        await Dataset.deleteMany({});
        return res.status(200).json("all the tags are deleted successfully")
  }catch(error){
       res.status(500).json(error);
  }
}