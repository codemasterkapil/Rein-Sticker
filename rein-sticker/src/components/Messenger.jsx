// library imports

import {AppBar,Toolbar,styled,Box} from '@mui/material';

// components
import LoginDialog from './account/LoginDialog.jsx';

// styling

const Header=styled(AppBar)`
  height: 220px;
  background-color:#ffb6c1;
  box-shadow:none;
`

const Component=styled(Box)`
  height:100vh;
  background-color:#DCDCDC;
`
  
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>
          
        </Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  )
}

export default Messenger
