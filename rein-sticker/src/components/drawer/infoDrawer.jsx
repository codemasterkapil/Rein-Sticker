

import {Drawer,styled,Box,Typography} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Profile from './Profile.jsx';

const Header=styled(Box)`
  background:lightpink;
  height:107px;
  display:flex;
  & > svg, & >p {
    margin-top:auto;
    padding:15px;
    font-weight:600;
  }
`

const drawerStyle={
    left:20,
    top:20,
    height:'95.5%',
    width:'30%',
    boxShadow:'none',
}

const Component=styled(Box)`
  background:#ededed;
  height:85%
`

const infoDrawer = ({open,setOpen}) => {

const handleClose=()=>{
    setOpen(false);
}

  return (
    <Drawer 
       open={open}
       onClose={handleClose}
       PaperProps={{sx:drawerStyle}}
       style={{zIndex:1500}}
    >
      <Header>
         <ArrowBackOutlinedIcon onClick={()=>setOpen(false)}></ArrowBackOutlinedIcon>
         <Typography>Profile</Typography>
      </Header>
      <Component>
        <Profile></Profile>
      </Component>
    </Drawer>
  )
}

export default infoDrawer
