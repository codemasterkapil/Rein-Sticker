import { Dialog,Box,styled } from "@mui/material"

import Menu from './menu/Menu.jsx'
import EmptyChat  from "./chat/EmptyChat.jsx"

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
  width:400px;
`
const RightBox=styled(Box)`
  min-width:73%;
  border:4px solid #FFB6C1
`

const ChatDialog = () => {
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
                <EmptyChat></EmptyChat>
           </RightBox>
        </Component>

    </Dialog>
  )
}

export default ChatDialog
