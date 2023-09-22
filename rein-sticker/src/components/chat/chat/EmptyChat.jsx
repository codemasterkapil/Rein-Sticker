import React from 'react'

import {Box,styled,Typography} from '@mui/material';
import { background_stickers } from '../../../constants/data';

const Component=styled(Box)`
  background:#f8f9fa;
  padding:30px 0;
  text-align:center;
  height:100vh;
`
const Title=styled(Typography)`
  font-size:32px;
  margin:25px 0 10px 0;
  font-family:inherit;
  font-weight:300;
  color:#41525d;
`
const SubTitle=styled(Typography)`
  font-size:14px;
  color:#667781;
  font-weight:400;
  font-family:inherit;
 
`

const Image=styled('img')({
   width:'100%',
   height:500,
   marginTop:100,
})

const EmptyChat = () => {
  return (
    <Component>
        <Box>
           <Image src={background_stickers} alt="stickers" />
           <Title>Rein Stickers Web</Title>
           <SubTitle>Sticker up your chats effortlessly with our intelligent sticker recommendation chat web app.</SubTitle>
        </Box>
    </Component>
  )
}

export default EmptyChat