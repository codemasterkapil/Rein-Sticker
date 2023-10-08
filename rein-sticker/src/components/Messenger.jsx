// library imports
import {useContext,useEffect} from 'react';
import {AppBar,Toolbar,styled,Box} from '@mui/material';

// components imports
import LoginDialog from './account/LoginDialog.jsx';
import ChatDialog from './chat/ChatDialog.jsx';
import {AccountContext} from '../context/AccountProvider.jsx';

// styling

const LoginHeader=styled(AppBar)`
  height: 220px;
  background-color:#ffb6c1;
  box-shadow:none;
`
const Header=styled(AppBar)`
  height: 120px;
  background-color:#ffb6c1;
  box-shadow:none;
`

const Component=styled(Box)`
  height:100vh;
  background-color:#DCDCDC;
`
  
const Messenger = () => {

    const {account}=useContext(AccountContext);


  return (
    <Component>
        {

            account ?
            <>
               <Header>
                  <Toolbar> 
                  </Toolbar>
                </Header> 
               <ChatDialog />
            </>
             : 
            <>
               <LoginHeader>
                 <Toolbar> 
                 </Toolbar>
               </LoginHeader>
               <LoginDialog />
            </>
            
        }
      </Component>
  )
}

export default Messenger
