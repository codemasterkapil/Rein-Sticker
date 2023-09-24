import {Box,styled} from '@mui/material'
import Header from './Header.jsx';
import Search from './Search.jsx';
import Conversations from './Conversations.jsx';
import {useState} from 'react';

const Menu = () => {

  const [text,setText]=useState('');

  return (
    <Box>
       <Header></Header>
       <Search setText={setText}></Search>
       <Conversations text={text}/>
    </Box>
  )
}

export default Menu