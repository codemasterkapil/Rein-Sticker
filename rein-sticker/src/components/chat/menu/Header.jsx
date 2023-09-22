import {useContext,useState} from 'react';
import {Box,styled} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { AccountContext } from '../../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/infoDrawer';


const Component=styled(Box)`
   height:44px;
   background:#ededed;
   padding:8px 16px;
   display:flex;
   align-items:center;
   justify-content:space between;
  `
const Image=styled('img')({
    width:40,
    height:40,
    borderRadius:'50%'
})

const Wrapper=styled(Box)`
  margin-left:auto;
  & :first-child {
     font-size:22px;
     margin-right:10px;
  }
`

const Header = () => {

    const {account} =useContext(AccountContext)
    
    const [openDrawer,setOpenDrawer]=useState(false);

    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }

  return (
   <>
      <Component>
         <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>
         <Wrapper>
            <MessageIcon ></MessageIcon>  
            <HeaderMenu setItOpen={setOpenDrawer}/>  
         </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}></InfoDrawer>
   </>
  )
}

export default Header
