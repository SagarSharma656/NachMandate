import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { PrimaryBranch, PrimaryProduct, VendorUser } from "../../utils/types";



const primaryProducts: PrimaryProduct[] = [
  {
    id: 'sdvs',
    name: 'sdvsd',
  },
]

const primaryBranches : PrimaryBranch[] = [
  {
    id: 'dhk',
    name: 'skjbs',
  }
]

const vendorUser : VendorUser[] = [
  {
    id: 'hhdj',
    name: 'daj'
  }
]


interface AddUserProps {
  handleCloseAddUser: any;
}

function AddUser(props: AddUserProps) {
  const { handleCloseAddUser } = props;

  const [primaryProductsValue, setPrimaryProductValue] = useState<PrimaryProduct | null>();
  const [primaryBranchValue, setPrimaryBranchValue] = useState<PrimaryBranch | null>();
  const [venderUserValue, setVenderUserValue] = useState<VendorUser | null>();

  const [formData, setFromData] = useState(
    {
      userName: '',
      phoneNumber:'',
      emailID:'',
      primaryProduct:'',
      primaryBranch:'',
      vendorUser:'',
      check_MICR_IFSC:false,
      checkRef1:false,
      branchAdmin:false,
      operationAdmin:false,
      bulkDataUploadOperations:false,
      dataEntryOperationsChecker:false,
      dataEntryOperationsMaker:false,
      user:false,
      dataEntryBranchAdmin:false,
      mobileAppOperations:false,
      NACH_CancellationsAtNPCI_Checker:false,
      NACH_CancellationsAtNPCI_Maker:false,
      debitPresentationChecker:false,
      debitPresentationMaker:false,
      collectionDateAndTimeChange:false,
      batchCreation:false,
      consolidateReport:false,
      IFSC_Update:false,
      billingReport:false,
      pending_UMRN_AndResponse:false,
      UPI_Mandate:false,
      UPI_PresentationMaker:false,
      UPI_PresentationChecker:false,
      bulk_UPI_Mandate:false
  }
  );

  function handleSubmit(_event: any){
    _event.preventDefault();
  }



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
            Add New User
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{mx:'auto', my:2}}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Grid>
              <Stack spacing={1}>
                <Grid>
                  <Stack spacing={2}>
                    <TextField
                      id="standard-basic"
                      type="text"
                      label="User Name"
                      variant="standard"
                      size="small"
                    />
                    <TextField
                      id="standard-basic"
                      type="number"
                      label="Phone Number"
                      variant="standard"
                      size="small"
                    />
                    <TextField
                      id="standard-basic"
                      type="email"
                      label="Email Id"
                      variant="standard"
                      size="small"
                    />
                    <Autocomplete
                      value={primaryProductsValue}
                      size="small"
                      getOptionLabel={(option) => option.name}
                      id="controllable-states-demo"
                      onChange={() => {}}
                      options={primaryProducts}
                      renderInput={(params) => (
                        <TextField {...params} label="Primary Product" />
                      )}
                    />
                    <Autocomplete
                      value={primaryBranchValue}
                      size="small"
                      getOptionLabel={(option) => option.name}
                      id="controllable-states-demo"
                      onChange={() => {}}
                      options={primaryBranches}
                      renderInput={(params) => (
                        <TextField {...params} label="Primary Branch" />
                      )}
                    />
                    <Autocomplete
                      value={venderUserValue}
                      size="small"
                      getOptionLabel={(option) => option.name}
                      id="controllable-states-demo"
                      onChange={() => {}}
                      options={vendorUser}
                      renderInput={(params) => (
                        <TextField {...params} label="Vender User" />
                      )}
                    />

                  </Stack>
                </Grid>
                <Grid>
                  <Stack direction='row'>
                    <FormControlLabel control={<Checkbox  size="small"/>} label="Check MIRC/IFSC" />
                    <FormControlLabel control={<Checkbox  size="small"/>} label="Check Ref1"/>
                  </Stack>
                </Grid>
                <Grid>
                  <Stack direction='row'>
                    <Grid>
                      <Stack>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Branch Admin"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Bulk Data Upload Operations"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Data Entry Operations-Maker" />
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Data Entry Branch Admin"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="NACH Cancellations at NPCI-Checker" />
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Debit Presentation-Checker"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Collection Date & Time Change"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Consolidate Report" />
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Billing Report"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="UPI Mandate"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="UPI Presentation-Checker"/>
                      </Stack>
                    </Grid>
                    <Grid>
                      <Stack>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Operation Admin"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Data Entry Operations-Checker"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="User" />
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Mobile App Operations"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="NACH Cancellations at NPCI-Maker"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Debit Presentation-Maker"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Batch Creation"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="IFSC Update"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Panding UMRN & Response"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="UPI Pesentation-Maker"/>
                        <FormControlLabel control={<Checkbox  size="small"/>} label="Bulk UPI Mandate" />
                      </Stack>
                    </Grid>
                  </Stack>
                </Grid>
                <Button type="submit">Save</Button>
              </Stack>
            </Grid>
          </FormGroup>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default AddUser;
