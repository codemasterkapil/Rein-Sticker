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
  width:423px;
`
const RightBox=styled(Box)`
  min-width:69%;
  border-left:4px solid lightgrey
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
