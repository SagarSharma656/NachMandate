
import { useState } from 'react';
import Login from './page/auth/Login';
import LandingPage from './page/landingPage/LandingPage';
import { Box } from '@mui/material';



function App() {

  
  const [isLogin, setIsLogin] = useState(false);


  return (
     <Box>
      {
         isLogin? <LandingPage setIsLogin={setIsLogin}/> 
            :<Login setIsLogin={setIsLogin}/>
      }
     </Box>
  );
}

export default App;
