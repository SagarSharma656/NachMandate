import {Toolbar, IconButton, Typography, Stack, Box, Tooltip, Avatar, Menu, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";


const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (_event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(_event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  
  return (
    
    <AppBar position="fixed" open={open}>
        <Toolbar style={{background: 'rgb(58, 196, 125)'}}>
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

                <Box sx={{ flexGrow: 0}}>
                  <Tooltip title="Open settings">
                    {/* <AccountCircleIcon onClick={handleOpenUserMenu}/> */}
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ":focus":{outline:'none'} }}>
                      <Avatar alt="Remy Sharp" src="" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

              </Stack>
            </Typography>
            

          </Typography>
        </Toolbar>
      </AppBar>
    
  )
}

export default Header