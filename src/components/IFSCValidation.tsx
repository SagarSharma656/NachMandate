import { Box, Button, DialogActions, DialogContent, DialogTitle, Stack, TextField,  Typography } from '@mui/material';
import { useState } from 'react';

interface IFSCValidationProps{
    handleClose: any
}

function IFSCValidation(props: IFSCValidationProps) {
    const {handleClose} = props;

    const fetchAPI = "https://ifsc.razorpay.com/";

    const [IFSCcode, setIFSCcode] = useState();
    const [bankName, setBankName] = useState<String>("");


    function handleIFSCcode(_event: any){
      setIFSCcode(_event.target.value);
    }

    async function handleFindBank(){
      const response = await fetch(`${fetchAPI}${IFSCcode}`);
      const result = await response.json();
      setBankName(`${result.BANK}, ${result.BRANCH}`);
    }
    

  return (
    <Box>
      <DialogTitle>{"IFSC Validation"}</DialogTitle>
      <DialogContent>
        <Stack direction="row" pb={1} pt={0.6} gap={1}>
          <TextField
            id="outlined-basic"
            label="Enter IFSC"
            type="text"
            variant="outlined"
            size="small"
            fullWidth
            value={IFSCcode}
            onChange={handleIFSCcode}
          />
          <Typography variant="body1" color="initial" alignSelf='center'>Or</Typography>
          <TextField
            id="outlined-basic"
            label="MICR"
            type="text"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Stack>
        <TextField
          
          value={bankName}
          id="outlined-basic"
          label="Bank"
          type="text"
          variant="outlined"
          size="small"
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleFindBank}>Search</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Box>
  );
}

export default IFSCValidation