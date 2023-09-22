import { Dialog,Box,styled } from "@mui/material"
import {useContext} from 'react';
import Menu from './menu/Menu.jsx'
import EmptyChat  from "./chat/EmptyChat.jsx"
import ChatBox from "./chat/ChatBox.jsx"
import { AccountContext } from "../../context/AccountProvider.jsx";

const dialogStyle={
    height:'96%',
    margin:'2%',
    width:'100%',
    maxWidth:'100%',
    maxHeight:'100%',
    borderRadius:0,
    boxShadow:'none',
    overflow:'hidden',
    backgroundColor:'none',
}

const Component=styled(Box)`
  display:flex
`

const LeftBox=styled(Box)`
  width:423px;
`
const RightBox=styled(Box)`
  min-width:69%;
  border-left:4px solid lightgrey
`

const ChatDialog = () => {

   const {person}=useContext(AccountContext);

  return (
    <Dialog 
    open={true}  
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
        <Component>
           <LeftBox>
               <Menu></Menu>
           </LeftBox>
           <RightBox>
              {Object.keys(person).length?<ChatBox></ChatBox>:<EmptyChat></EmptyChat>}
           </RightBox>
        </Component>

    </Dialog>
  )
}

export default ChatDialog
