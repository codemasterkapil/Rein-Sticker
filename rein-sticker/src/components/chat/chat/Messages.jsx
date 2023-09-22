import React from 'react'
import {styled,Box} from '@mui/material';
import Footer from './Footer';

const Wrapper=styled(Box)`
  background-image: url('https://i.pinimg.com/564x/fe/41/48/fe41486f310e4847d8b2e6b2f2ff7502.jpg');
  background-size:50%;
`
const Component=styled(Box)`
  height:81.9vh;
  overflow-y:scroll;
`

const Messages = ({person}) => {

  return (
    <Wrapper>
       <Component>
          
       </Component>
       <Footer></Footer>
    </Wrapper>
  )
}

export default Messages;
