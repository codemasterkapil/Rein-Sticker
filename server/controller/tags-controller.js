
import {imageObjects} from './data.js'
import Dataset from '../model/dataset.js';
import {getAllKeyWords} from '../machinelearning/keyword_extraction.js';
import {getSentiment} from '../machinelearning/sentimental_analysis.js';
import multer from 'multer';
import tf from '@tensorflow/tfjs-node';
import mobilenet from '@tensorflow-models/mobilenet';

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



const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

let model;

// Load the MobileNet model
async function loadModel() {
  model = await mobilenet.load();
}

async function classifyImage(imageBuffer) {
     const img = tf.node.decodeImage(imageBuffer);
     const predictions = await model.classify(img);
   
     // Return the top prediction class name
     // console.log(predictions)
     return predictions;
   }

export const uploadSticker=async(req,res)=>{
     try {
          // Wait for the model to be loaded
          await loadModel();

          // Save the image to the database
          const newImage = new Dataset({ Image: req.file.buffer.toString('base64') });
          console.log(newImage);
          // Classify the image using MobileNet
          const predictions= await classifyImage(req.file.buffer);
          // console.log(tag);
          // Save the tag to the database
          const classNamesArray = predictions.flatMap(prediction =>
               prediction.className.split(', ').map(className => className.trim())
             );
          console.log(classNamesArray)
          newImage.Tags = classNamesArray;
          await newImage.save();
           
          res.json({ success: true, message: 'Image uploaded and classified successfully!', tags: newImage.Tags });
        } catch (error) {
          console.error('Error uploading and classifying image:', error);
          res.status(500).json({ error: 'Internal server error.' });
        }
}