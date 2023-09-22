import {Box,styled} from '@mui/material'
import Header from './Header.jsx';
import Search from './Search.jsx';
import Conversations from './Conversations.jsx';

const Menu = () => {
  return (
    <Box>
       <Header></Header>
       <Search></Search>
       <Conversations />
    </Box>
  )
}

export default Menu
