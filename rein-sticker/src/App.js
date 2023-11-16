import Messenger from './components/Messenger.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider.jsx';
import {
  BrowserRouter ,
  Route,
  Routes, 
  Link
} from 'react-router-dom';
import Sentimental from './components/SentimentalAnalysis/Sentimental.jsx'

function App() {

  const clientId = '858145604140-fnga8mkps28vslrl8lb0vam3rcvtf0kt.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider>
        {/* <Messenger /> */}
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Messenger />} />
          <Route path="/sentimentalAnalysis" element={<Sentimental />} />
          </Routes>
        </BrowserRouter>
      </AccountProvider>

    </GoogleOAuthProvider>
  );

}

export default App;
