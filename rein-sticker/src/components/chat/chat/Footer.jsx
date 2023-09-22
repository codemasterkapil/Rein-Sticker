import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {Box,styled,InputBase} from '@mui/material'

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

const Footer = () => {
  return (
    <Container>
       <EmojiEmotionsOutlinedIcon />
       <Attach />
       <Search>
          <InputField placeholder='type a message'></InputField>
       </Search>
       <MicOutlinedIcon />
    </Container>
  )
}

export default Footer
