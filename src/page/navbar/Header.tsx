import {Toolbar, IconButton, Typography, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


interface HeaderProps{
  open: boolean,
  handleDrawerOpen: any,
  AppBar: any
}


function Header(props:HeaderProps) {
 const {open , handleDrawerOpen, AppBar} = props
 const navigate = useNavigate();


 function handleClickOnHomeBtn(){
  navigate(' ');
 }

  
  return (
    
    <AppBar position="fixed" open={open}>
        <Toolbar style={{minHeight: 38, background: 'rgb(58, 196, 125)'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />   
          </IconButton>
          <Typography noWrap component="div"  sx={{width: '100%', display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
            
            <Typography variant="h6" noWrap component='div'>
              Header
            </Typography>
            
           
            <Typography component='div'>
              <Stack direction='row' spacing={2} display='flex' alignItems='center'>

                <Typography component='button' sx={{height: 25, width: 50, display: 'flex', justifyContent:'center', alignItems: 'center', fontSize: 12}} onClick={handleClickOnHomeBtn}>
                    Home
                </Typography>

                <Typography component='div' sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                  <AccountCircleIcon  fontSize="large"/>
                </Typography>

              </Stack>
            </Typography>
            

          </Typography>
        </Toolbar>
      </AppBar>
    
  )
}

export default Header