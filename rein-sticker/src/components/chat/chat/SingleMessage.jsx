import React from 'react'
import {styled,Box,Typography} from '@mui/material'

const Own=styled(Box)`
   background:#dcf8c6;
   max-width:60%;
   margin-left:auto;
   width:fit-content;
   word-break:break-word;
   display:flex;
   border-radius:50%;
`

const SingleMessage = ({message}) => {
  return (
    <Own>
       <Typography>{message.text}</Typography>
       <Typography>{message.createdAt}</Typography>
    </Own>
  )
}

export default SingleMessage
 