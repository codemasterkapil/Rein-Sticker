import {useContext, useEffect,useState} from 'react'
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import {AccountContext} from '../../../context/AccountProvider.jsx';
import { Box } from '@mui/material';
import { getConversation } from '../../../service/api';
 
const ChatBox = () => {

    const {account,person}=useContext(AccountContext);
    const [conversation,setConversation]=useState({});

    useEffect(()=>{
        const getConversationDetails=async()=>{
           let data=await getConversation({senderId:account.sub,receiverId:person.sub}) 
           setConversation(data);
        }
        getConversationDetails();
    },[person.sub]) 

  return (
    <Box>
       <ChatHeader person={person}></ChatHeader>
       <Messages person={person} conversation={conversation}></Messages>
    </ Box>
  )
}

export default ChatBox 