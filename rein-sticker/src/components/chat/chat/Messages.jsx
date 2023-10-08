import { useState, useContext, useEffect,useRef } from 'react'
import { styled, Box } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage, getMessages } from '../../../service/api';
import SingleMessage from './SingleMessage';
import Stickers from './Stickers';

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

  const { account,socket } = useContext(AccountContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [new_message, setNew_Message] = useState(false);
  const [file,setFile]=useState();
  const [incomingMessage,setIncomingMessage]=useState({});
  const [ready,setReady]=useState(false);
  const [isimage,setIsimage]=useState(false);

  const scrollRef=useRef();

  useEffect(()=>{
     socket.current.on('getMessage',(data)=>{
         setIncomingMessage({
            ...data,
            createdAt:Date.now(),
         })
     })
  },[])

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetails();
  }, [person.sub, conversation._id, new_message]);

  useEffect(()=>{
     scrollRef.current?.scrollIntoView({transition:'smooth'})
  },[messages]) 

  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages(prev=>[...prev,incomingMessage])
  },[incomingMessage,conversation]);

  const sendText = async (e) => {
    console.log('called',isimage);
    if (isimage || (e.key === 'Enter')) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      }

      if(isimage){
        setIsimage(false);
        message.type="Image";
        message.text=e.Image;
      }

      console.log(message);

      socket.current.emit('sendMessage',message);

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
              <Container ref={scrollRef}>
                <SingleMessage message={message}></SingleMessage>
              </Container>
            )
          })
        }
      </Component>
      {ready&&<Stickers setReady={setReady} setIsimage={setIsimage} sendText={sendText} isimage={isimage} />}
      <Footer sendText={sendText} setValue={setValue} value={value} setFile={setFile} file={file} setReady={setReady}></Footer>
    </Wrapper>
  )
}

export default Messages;
