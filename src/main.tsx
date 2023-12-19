
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './page/landingPage/LandingPage.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
       <LandingPage />
    </BrowserRouter>
)
