
import {getUsers} from '../../../service/api.js';
import {useEffect,useState,useContext} from 'react'
import {Box,styled,Divider} from '@mui/material';
import Conversation from './Conversation.jsx';
import {AccountContext} from '../../../context/AccountProvider.jsx';

const Component=styled(Box)`
  overflow: overlay;
  height:81vh;
`


const Conversations = ({text}) => {

  const [users,setUsers]=useState([]);

  const { account }=useContext(AccountContext);

  useEffect(()=>{
    
    const fetchData=async()=>{
       try{
          let response=await getUsers();
          const filteredData=response.filter((res)=>{
            return res.name.toLowerCase().includes(text);
          })
          setUsers(filteredData)
       }catch(error){
          console.log('error while fetching the users',error.message);
       }
    } 
    fetchData();
  },[text])

  return (
    <Component>
       {
          users.map((user)=>{
            if(user.sub!=account.sub){
              return (
                <>
                  <Conversation user={user}/>
                  <Divider />
                </>
              )
            }
          })
       }
    </Component>
  )
}

export default Conversations
