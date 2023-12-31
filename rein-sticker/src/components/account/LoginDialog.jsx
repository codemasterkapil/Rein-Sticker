
import {useContext} from 'react';
import {Box,Dialog,Typography,List,ListItem,styled} from '@mui/material';
import {qrCodeImage} from '../../constants/data.js';
import { AccountContext } from '../../context/AccountProvider.jsx';
import { addUser } from '../../service/api.js';

import {GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';


// styling

const Container=styled(Box)`
  padding:50px 0 0 50px;
`

const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
}

const Component=styled(Box)`
  display:flex;
`

const QRCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px',

})

const Title=styled(Typography)`
font-size: 26px;
margin-bottom: 25px;
color: #525252;
font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
font-weight: 300;
`

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSuccess=async (res)=>{
     const decoded=jwt_decode(res.credential)
     setAccount(decoded);
     await addUser(decoded);
  }   
  
  const onLoginError=(res)=>{
     console.log('Error while login',res);
  }


  return (
   
    <Dialog 
    open={true}  
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    >
      <Component>
        <Container>
           <Title>To Use ReinSticker on your Computer</Title>
           <StyledList>
              <ListItem>1. open ReinSticker on your phone</ListItem> 
              <ListItem>2. Tap Menu Settings and Select ReinSticker Web</ListItem>
              <ListItem>3. Point Your Phone to this screen to capture the code</ListItem>
           </StyledList> 
         
        </Container>
        <Box style={{position:'relative'}}> 
              <QRCode src={qrCodeImage} alt='qrimage' />
              <Box style={{position:'absolute' , top:'50%' , transform:'translateX(25%)'}}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
              </Box>
        </Box>                       
      </Component>
    </Dialog>
    
  )
}

export default LoginDialog
