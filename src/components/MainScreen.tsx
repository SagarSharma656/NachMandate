
import { Outlet } from 'react-router-dom'
import style from '../styles/MainScreen.module.css'
import { Box } from '@mui/material'

function MainScreen() {
  return (
    <Box sx={{}}>
      <Outlet/>
    </Box>
  )
}

export default MainScreen