import {useContext} from 'react'
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import {AccountContext} from '../../../context/AccountProvider.jsx';
import { Box } from '@mui/material';

const ChatBox = () => {

    const {person}=useContext(AccountContext);

  return (
    <Box>
       <ChatHeader person={person}></ChatHeader>
       <Messages person={person}></Messages>
    </ Box>
  )
}

export default ChatBox
 