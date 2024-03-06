
import { Fragment, createContext, useReducer, useState } from 'react';
import Login from './page/auth/Login';
import LandingPage from './page/landingPage/LandingPage';
import { Box } from '@mui/material';
import { AppContextType } from './utils/types';
import { appReducer, initialAppState } from './utils/appState';
import { QueryClient, QueryClientProvider } from 'react-query';

export const AppContext = createContext<AppContextType>({
   state: initialAppState,
   dispatch: () => { },
});

export const queryClient = new QueryClient();


function App() {
   const [state, dispatch] = useReducer(appReducer, initialAppState);
   const [isLogin, setIsLogin] = useState(false);

   return (
      <Box>
         <Fragment>
            <QueryClientProvider client={queryClient}>
               <AppContext.Provider value={{ state, dispatch }}>
                  {!isLogin ? (
                     <Login setIsLogin={setIsLogin} />
                  ) : (
                     <LandingPage setIsLogin={setIsLogin} />
                  )}
               </AppContext.Provider>
            </QueryClientProvider>
         </Fragment>
      </Box>
   );

}

export default App;
