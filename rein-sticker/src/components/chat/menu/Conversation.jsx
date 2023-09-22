import {Box,styled,Typography} from '@mui/material';
import {AccountContext} from '../../../context/AccountProvider.jsx'
import {useContext} from 'react';

const Component=styled(Box)`
  display:flex;
  height:45px;
  padding:13px 0;
  cursor:pointer;
`

const Image=styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding:'0 14px',
})

const Conversation = ({user}) => {

  const {setPerson}=useContext(AccountContext)

  const getUser=()=>{
    setPerson(user)
  }

  return (
    <Component onClick={()=>getUser()}>
       <Box>
           <Image src={user.picture} alt="dp" />
       </Box>
       <Box>
           <Box>
             <Typography>{user.name}</Typography>
           </Box>
       </Box>
    </Component>
  )
}

export default Conversation
  