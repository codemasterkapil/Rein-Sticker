import {useContext} from 'react';
import {Box,styled} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { AccountContext } from '../../../context/AccountProvider';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Component=styled(Box)`
   height:44px;
   background:#ededed;
   padding:8px 16px;
`
const Image=styled('img')({
    width:40,
    height:40,
    borderRadius:'50%'
})

const Header = () => {

    const {account} =useContext(AccountContext)
    

  return (
   <>
      <Component>
         <Image src={account.picture} alt="dp" />
         <Box>
         <MessageIcon></MessageIcon>  
         <MoreVertOutlinedIcon></MoreVertOutlinedIcon>  
         </Box>
      </Component>
   </>
  )
}

export default Header
