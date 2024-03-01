import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputBase, Slide, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AccountType } from "../../../utils/types";
import { TransitionProps } from "@mui/material/transitions";
import IFSCValidation from "../../../components/IFSCValidation";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const accountTypes: AccountType[] = [
  {
    id: "Saving - SB",
    name: "Saving - SB",
  },
  {
    id: "Currunt - CA",
    name: "Currunt - CA",
  },
  {
    id: "Cash Credit - CC",
    name: "Cash Credit - CC",
  },
  {
    id: "Others",
    name: "Others",
  },
];


function CustomerAndBankDetails() {

    const [accountTypeValue, setAccountTypeValue] = useState<AccountType | null>();

    const [IFSCOpen, setIFSCOpen] = React.useState(false);

    const handleClickOpen = () => {
      setIFSCOpen(true);
    };

    const handleClose = () => {
      setIFSCOpen(false);
    };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        sx={{ width: 750 }}
        border={1}
        borderColor={"lightGray"}
        px={10}
        py={1}
      >
        <form style={{ width: "100%" }}>
          <Typography variant="h6" textAlign="center" color="initial" p={1}>
            Customer and Bank Details
          </Typography>
          <Autocomplete
            value={accountTypeValue}
            size="small"
            getOptionLabel={(option) => option.name}
            id="controllable-states-demo"
            onChange={() => {}}
            options={accountTypes}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Account Type" />
            )}
          />
          <Stack direction="row" gap={1} pb={1}>
            <TextField
              // disabled

              id="outlined-basic"
              label="IFSC/MICR"
              type="text"
              variant="outlined"
              size="small"
              // InputLabelProps={{
              //   style:{
              //     color: 'gray'
              //   }
              // }}
              fullWidth
              onMouseDown={() => {
                handleClickOpen();
              }}
            />
            <TextField
              id="outlined-basic"
              label="Bank"
              type="text"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Stack>

          <TextField
            id="outlined-basic"
            label="Account No"
            type="number"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ pb: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile"
            type="number"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ pb: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Email Id"
            type="email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ pb: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Reference 1"
            type="text"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ pb: 1 }}
          />
          <Stack direction="row" gap={1} pb={1}>
            <TextField
              id="outlined-basic"
              label="Reference 2"
              type="text"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Reference 3"
              type="text"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Stack>
        </form>

        <Dialog
          open={IFSCOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <IFSCValidation handleClose={handleClose} />
        </Dialog>
      </Grid>
    </Box>
  );
}

export default CustomerAndBankDetails;


