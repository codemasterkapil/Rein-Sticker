import {useEffect,useContext,useState,useRef} from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {Box,styled,InputBase} from '@mui/material'
import {uploadFile,recommendStickers} from '../../../service/api.js';
import RecommendIcon from '@mui/icons-material/Recommend';
import { AccountContext } from '../../../context/AccountProvider.jsx';
import { UploadStickers,recommendSentiment} from '../../../service/api.js';
import {BsGraphUpArrow} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const Train=styled('Button')`
  background-color:green;
  color:white;
  border:1px solid black;
  border-radius:10px;
  cursor:pointer;
`

const Footer = ({sendText,setValue,value,file,setFile,setReady}) => {
  
  const hiddenInputRef = useRef();

  const navigate = useNavigate();
  
  const {setSmessages,account,stickers,setStickers}=useContext(AccountContext);
  const [selectedImage, setSelectedImage] = useState(null);

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

   const getStickers=async()=>{
    // await UploadStickers(sticker_data)
      setReady(true);
      const message = {
        text:value
      };
      const response=await recommendStickers(message);
      setStickers(response.data);
   }

   const getSentiment=async()=>{
      const response = await recommendSentiment(account.sub);
      setSmessages(response.data);
      navigate('/sentimentalAnalysis');
   }

   const handleImageChange=(e)=>{
      const file = e.target.files[0];
      setSelectedImage(file);
   }

   const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      // Upload image to backend
      const response = await axios.post('http://localhost:8000/upload', formData);

      // Update imageTags state
      // setImageTags(response.data.tags);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleClick = () => {
    hiddenInputRef.current.click();
  };

  return (
    <Container>
       {/* <EmojiEmotionsOutlinedIcon /> */}
       <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          cursor: 'pointer',
          color:'green',
          fontWeight: 'bold',
        }}
        onClick={handleClick}
      >
        <Attach />
      </div>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
        ref={hiddenInputRef}
      />
    </div>
         
         <Train onClick={handleUpload}>Train Model</Train>
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
       <BsGraphUpArrow onClick={()=>getSentiment()} style={{cursor:'pointer'}}/>
       <RecommendIcon 
        onClick={()=>getStickers()}
        style={{cursor:'pointer'}} />
       {/* <MicOutlinedIcon />   */}
    </Container>
  )
}

export default Footer
