import { useContext } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { formatDate } from '../../../utils/common-utils'
import { AccountContext } from '../../../context/AccountProvider'
import './Stickers.css'

const Own = styled(Box)`
   background:#dcf8c6;
   max-width:60%;
   margin-left:auto;
   width:fit-content;
   word-break:break-word;
   display:flex;
   border-radius:10%;
   padding:5px;
   margin-top:5px;
`
const Wrapper = styled(Box)`
   background:#FFFFFF;
   max-width:60%;
   width:fit-content;
   word-break:break-word;
   display:flex;
   border-radius:10%;
   padding:5px;
   
`

const Text = styled(Typography)`
   font-size:14px;
   padding:0 25px 0 5px;
`
const Time = styled(Typography)`
   font-size:10px;
   margin-top:auto;
   word-break:keep-all;
`

const SingleMessage = ({ message }) => {

    const { account } = useContext(AccountContext);
    // console.log(message);
    return (
        <>
            {message.senderId === account.sub ?
                <Own>
                    {
                        message.type==="Image"?<div><img className='sticky-image' src={message.text} alt="msgimg" /></div>:<Text>{message.text}</Text>
                    }
                    <Time>{formatDate(message.createdAt)}</Time>
                </Own>
                :
                <Wrapper>
                    {
                        message.type==="Image"?<div><img className='sticky-image' src={message.text} alt="msgimg" /></div>:<Text>{message.text}</Text>
                    }
                    <Time>{formatDate(message.createdAt)}</Time>
                </Wrapper>
            }
        </>
    )
}

export default SingleMessage
