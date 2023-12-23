
import { Fragment, useState } from 'react';
import Login from './page/auth/Login';
import LandingPage from './page/landingPage/LandingPage';



function App() {

  
  const [isLogin, setIsLogin] = useState(false);


  return (
     <Fragment>
      {
         isLogin? <LandingPage/> :<Login setIsLogin={setIsLogin}/>
      }
     </Fragment>
  );
}

export default App;
