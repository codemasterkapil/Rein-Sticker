import {createContext,useState,useEffect,useRef} from 'react';

import {io} from 'socket.io-client';

export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
  
 const [account,setAccount]=useState();
 const [person,setPerson]=useState({});
 const [activeUsers,setActiveUsers]=useState([]);
 const [stickers,setStickers]=useState([]);

const socket=useRef(); 

useEffect(()=>{
   socket.current=io('ws://localhost:9000')
},[])

  return (
    <AccountContext.Provider value={{
       account,
       setAccount,
       person,
       setPerson,
       socket,
       activeUsers,
       setActiveUsers,
       stickers,
       setStickers
    }}>     
      {children}
    </AccountContext.Provider>
    
  )
}

export default AccountProvider;
