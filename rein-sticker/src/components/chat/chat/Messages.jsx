import { useState, useContext, useEffect } from 'react'
import { styled, Box } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage, getMessages } from '../../../service/api';
import SingleMessage from './SingleMessage';

const Wrapper = styled(Box)`
  background-image: url('https://i.pinimg.com/564x/fe/41/48/fe41486f310e4847d8b2e6b2f2ff7502.jpg');
  background-size:50%;
`
const Component = styled(Box)`
  height:81.9vh;
  overflow-y:scroll;
`
const Container = styled(Box)`
  padding : 1px 80px;
`



const Messages = ({ person, conversation }) => {

  const { account } = useContext(AccountContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [new_message, setNew_Message] = useState(false);

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetails();
  }, [person.sub, conversation._id, new_message]);


  const sendText = async (e) => {

    if (e.key === 'Enter') {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      }

      await newMessage(message);
      setValue('');
      setNew_Message(!new_message);
    }

  }

  return (
    <Wrapper>
      <Component>
        {
          messages.map((message) => {
            return (
              <Container>
                <SingleMessage message={message}></SingleMessage>
              </Container>
            )
          })
        }
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value}></Footer>
    </Wrapper>
  )
}

export default Messages;
