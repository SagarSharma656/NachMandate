
import { Fragment, useState } from 'react';
import style from './App.module.css';
import Login from './page/auth/Login';
import  Dashboard  from './page/dashboard/Dashboard';



function App() {

  
  const [isLogin, setIsLogin] = useState(false);


  return (
     <Fragment>
        <Login setIsLogin={setIsLogin}/>
        {/* <Dashboard/>         */}
     </Fragment>
  );
}

export default App;
