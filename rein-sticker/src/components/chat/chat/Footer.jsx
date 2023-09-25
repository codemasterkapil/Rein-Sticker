import {useState,useEffect} from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {Box,styled,InputBase} from '@mui/material'
import {uploadFile} from '../../../service/api.js';

const Container=styled(Box)`
   height:55px;
   background:#ededed;
   display:flex;
   align-items:center;
   padding:0 15px;
   & > * {
      margin:5px;
      color:#919191
   }
`

const Search=styled(Box)`
  background-color:#FFFFFF;
  border-radius:10px;
  width:calc(94% - 100px);
`
const InputField=styled(InputBase)`
  width:100%;
  padding: 20px;
  height:20px;
`
const Attach=styled(AttachFileOutlinedIcon)`
  transform:rotate(40deg);
`

const Footer = ({sendText,setValue,value,file,setFile}) => {


   useEffect(()=>{
     const getImage=async()=>{
       if(file){
         const data=new FormData();
         data.append("name",file.name);
         data.append("file",file);
         await uploadFile(data);
       }
     }
     getImage();
     setValue('');

   },[file])

   const onFileChange=(e)=>{
      setFile(e.target.files[0]);
      setValue(e.target.files[0].name);
   }

  return (
    <Container>
       <EmojiEmotionsOutlinedIcon />
       <label htmlFor="file-input">
         <Attach />
       </label>
       
       <input
          type="file"
          id="file-input"
          accept=".pdf"
          style={{ display: 'none' }}
          onChange={(e)=>onFileChange(e)}
      />
       <Search>
          <InputField placeholder='type a message'
            onChange={(e)=>setValue(e.target.value)} 
            onKeyDown={(e)=>sendText(e)}
            value={value}
          ></InputField>
       </Search>
       <MicOutlinedIcon />  
    </Container>
  )
}

export default Footer
