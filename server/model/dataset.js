import mongoose from 'mongoose';

const MessageSchema=new mongoose.Schema({
    Image: {
       type:String,
    },
    Tags:{
       type:Array,
    },
})

const dataset=mongoose.model('dataset',MessageSchema);

export default dataset;