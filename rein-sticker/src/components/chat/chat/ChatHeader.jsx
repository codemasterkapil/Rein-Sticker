
import {Box,Typography,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  {defaultProfilePicture } from '../../../constants/data.js';


const Header=styled(Box)`
  height:44px;
  background:#ededed;
  display:flex;
  align-items:center;
  padding:8px 16px;
`
const Image=styled('img')({
    height:40,
    width:40,
    objectFit:'cover',
     borderRadius:'50%'
})

const Name=styled(Typography)`
  margin-left:12px !important;
`
const Status=styled(Typography)`
  margin-left:12px !important;
  font-size:12px;
  color:rgba(0,0,0,0.6);
`

const RightContainer=styled(Box)`
  margin-left:auto;
  & > svg {
    padding:8px;
    font-size:24px;
    color:#000;
  }
`

const ChatHeader = ({person}) => {

  return (
    <Header>
        <Image src={person.picture} alt="dp" />
        <Box>
            <Name>{person.name}</Name>
            <Status>Offline</Status>
        </Box>
        <RightContainer>
            <SearchIcon />
            <MoreVertIcon />
        </RightContainer>
    </Header>
  )
}

export default ChatHeader
