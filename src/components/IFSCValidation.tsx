import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { AppBar, Box, Button, Container, FormGroup, Grid, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { DisabledByDefault } from '@mui/icons-material';

interface IFSCValidationProps{
    handleCloseAddUser: any
}

function IFSCValidation(props: IFSCValidationProps) {
    const {handleCloseAddUser} = props;

    

  return (

<React.Fragment>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar style={{ background: "rgb(58, 196, 125)" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseAddUser}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
           IFSC Validation
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{width:'50%',mx:'auto', my:2}}>
        <form action="">
            <FormGroup>
                <Grid>
                    <Stack spacing={2}>
                        <TextField
                            id="standard-basic"
                            type="text"
                            label="Enter IFSC"
                            variant="standard"
                            size="small"
                            />
                        <Typography variant='body2' sx={{textAlign: 'center'}}>
                            Or
                        </Typography>
                        <TextField
                            id="standard-basic"
                            type="number"
                            label="MICR"
                            variant="standard"
                            size="small"
                        />

                        <TextField
                            id="standard-basic"
                            type="text"
                            label="Bank"
                            variant="standard"
                            size="small"
                            />
                        <Button>Search</Button>
                    </Stack>
                </Grid>
            </FormGroup>
        </form>
      </Box>
    </React.Fragment>
    
  )
}

export default IFSCValidation