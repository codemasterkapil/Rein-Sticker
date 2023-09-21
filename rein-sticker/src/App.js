

import Messenger from './components/Messenger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider.jsx';

function App() {
  
  const clientId='858145604140-fnga8mkps28vslrl8lb0vam3rcvtf0kt.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
       <AccountProvider>
         <Messenger />
       </AccountProvider>
    </GoogleOAuthProvider>
  );

}

export default App;
