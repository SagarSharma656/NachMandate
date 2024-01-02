import style from "../../styles/NACHMandate.module.css";
import IFSCValidation from "../../components/IFSCValidation";
import { useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  Container,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  AutoCollectionDate,
  Branch,
  CategoryCode,
  Language,
  Product,
  SponserBankCode,
  UnityCode,
} from "../../utils/types";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker";





const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const languages: Language[] = [
  {
    id: "English",
    name: "English",
  },
];
const autoCollectionDates: AutoCollectionDate[] = [
  {
    id: "1st of every month",
    name: "1st of every month",
  },
  {
    id: "2nd of every month",
    name: "2nd of every month",
  },
  {
    id: "3rd of every month",
    name: "3rd of every month",
  },
  {
    id: "4th of every month",
    name: "4th of every month",
  },
  {
    id: "5th of every month",
    name: "5th of every month",
  },
  {
    id: "6th of every month",
    name: "6th of every month",
  },
  {
    id: "7th of every month",
    name: "7th of every month",
  },
  {
    id: "8th of every month",
    name: "8th of every month",
  },
  {
    id: "9th of every month",
    name: "9th of every month",
  },
  {
    id: "10th of every month",
    name: "10th of every month",
  },
  {
    id: "11th of every month",
    name: "11th of every month",
  },
  {
    id: "12th of every month",
    name: "12th of every month",
  },
  {
    id: "13th of every month",
    name: "13th of every month",
  },
  {
    id: "14th of every month",
    name: "14th of every month",
  },
  {
    id: "15th of every month",
    name: "15th of every month",
  },
  {
    id: "16th of every month",
    name: "16th of every month",
  },
  {
    id: "17th of every month",
    name: "17th of every month",
  },
  {
    id: "18th of every month",
    name: "18th of every month",
  },
  {
    id: "19th of every month",
    name: "19th of every month",
  },
  {
    id: "20th of every month",
    name: "20th of every month",
  },
  {
    id: "21th of every month",
    name: "21th of every month",
  },
  {
    id: "22th of every month",
    name: "22th of every month",
  },
  {
    id: "23rd of every month",
    name: "23rd of every month",
  },
  {
    id: "24th of every month",
    name: "24th of every month",
  },
  {
    id: "25th of every month",
    name: "25th of every month",
  },
  {
    id: "26th of every month",
    name: "26th of every month",
  },
  {
    id: "27th of every month",
    name: "27th of every month",
  },
  {
    id: "28th of every month",
    name: "28th of every month",
  },
];
const products: Product[] = [
  {
    id: "HOMELOAN",
    name: "HOMELOAN",
  },
  {
    id: "LOAN AGAINST PROPERTY",
    name: "LOAN AGAINST PROPERTY",
  },
  {
    id: "PERSONAL LOAN",
    name: "PERSONAL LOAN",
  },
  {
    id: "SPLN",
    name: "SPLN",
  },
];
const categoryCodes: CategoryCode[] = [
  {
    id: "LOAN INSTALMENT PAYMENT - L001",
    name: "LOAN INSTALMENT PAYMENT - L001",
  },
];
const branches: Branch[] = [
  {
    id: "JAIPUR",
    name: "JAIPUR",
  },
  {
    id: "DELHI",
    name: "DELHI",
  },
  {
    id: "SURAT",
    name: "SURAT",
  },
  {
    id: "PATIALA",
    name: "PATIALA",
  },
  {
    id: "NAGPUR",
    name: "NAGPUR",
  },
];
const sponserBankCodes: SponserBankCode[] = [
  {
    id: "HDFC",
    name: "HDFC",
  },
  {
    id: "IDFC BANK",
    name: "IDFC BANK",
  },
  {
    id: "KOTAK MAHINDRA BANK",
    name: "KOTAK MAHINDRA BANK",
  },
];
const unityCodes: UnityCode[] = [
  {
    id: "NACH00000000017335",
    name: "NACH00000000017335",
  },
  {
    id: "NACH00000000017335",
    name: "NACH00000000017335",
  },
  {
    id: "NACH00000000001977",
    name: "NACH00000000001977",
  },
];

function NACHMandate() {
  const [languageValue, setLanguageValue] = useState<Language | null>();
  const [autoCollectionDateValue, setAutoCollectionDateValue] =
    useState<AutoCollectionDate | null>();
  const [productValue, setProductValue] = useState<Product | null>();
  const [categoryCodeValue, setCategoryCodeValue] =
    useState<CategoryCode | null>();
  const [branchValue, setBranchValue] = useState<Branch | null>();
  const [sponserBankCodeValue, setSponserBankCodeValue] =
    useState<SponserBankCode | null>();
  const [unityCodeValue] = useState<UnityCode | null>();

  const IFSCValidationFormStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "lightgray",
  };

  // const [formData, setFormData] = useState<MandateFormDataObject>({
  //   language: "",
  //   autoCollectionAmount: "",
  //   autoCollectionDate: "",
  //   product: "",
  //   categoryCode: "",
  //   branch: "",
  //   UMRN: "",
  //   dateOnMandate: "",
  //   sponserBankCode: "",
  //   unityCode: "",
  //   create: false,
  //   modify: false,
  //   cancel: false,
  //   I_WehearbyAuthorize: "",
  //   toDebit: "",
  //   bankAC_Number: "",
  //   withBank: "",
  //   IFSC: "",
  //   MICR: "",
  //   anAmountOrRupees: "",
  //   frequency: "",
  //   debitType: "",
  //   reference1: "",
  //   reference2: "",
  //   reference3: "",
  //   phoneNumber: "",
  //   emailID: "",
  //   periodFrom: "",
  //   periodTo: "",
  //   untilCancelled: "",
  //   signPrimaryAccHolder: "",
  //   signSecondaryAccHolder: "",
  //   signTertiaryAccHolder: "",
  // });

  const [show_IFSC_ValidationForm, setShow_IFSC_ValidationForm] =
    useState<boolean>(false);

  const handleClickOpenAddUser = () => {
    setShow_IFSC_ValidationForm(true);
  };
  const handleCloseAddUser = () => {
    setShow_IFSC_ValidationForm(false);
  };

  // function handleOnChange(event: any) {
  //   const { name, value, type, checked } = event.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // }

  function handleSubmit(event: any) {
    event.preventDefault();
    // console.log(formData)
  }

  

  return (
    <Container id={style.wrapper} sx={{ position: "relative" }}>
      <FormGroup id={style.fromContainer} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid id="container1" container item>
            {/* <Stack direction='row' justifyContent="space-between" spacing={3}> */}
            <Grid item xs={4}>
              <Autocomplete
                fullWidth
                value={languageValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={languages}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Language" />
                )}
              />
            </Grid>

            <Grid container item xs={8} p={1}>
              {/* <Stack direction='row' spacing={2}> */}

              <Grid item xs={3}>
                <Typography fontSize="11px">
                  E-Mandate Authorization Date
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography fontSize="11px">Current Mandate Status</Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography fontSize="11px">Mandate Mode</Typography>
              </Grid>

              <Grid item xs={3}>
                <Typography fontSize="11px">Mandate ID</Typography>
              </Grid>
              {/* </Stack> */}
            </Grid>
            {/* </Stack> */}
          </Grid>

          <Grid id="container2" container item spacing={1}>
            <Grid container item xs={12} spacing={1}>
              {/* <Stack direction='row'> */}
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Auto Collection Amount"
                  variant="filled"
                  type="number"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  fullWidth
                  value={autoCollectionDateValue}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  id="controllable-states-demo"
                  onChange={() => {}}
                  options={autoCollectionDates}
                  // sx={{ width: '100%' }}
                  renderInput={(params) => (
                    <TextField {...params} label="Auto Collection Date" />
                  )}
                />
              </Grid>
              {/* </Stack> */}
            </Grid>
            <Grid container item xs={12} spacing={1}>
              {/* <Stack direction='row'> */}
              <Grid item xs={4}>
                <Autocomplete
                  fullWidth
                  value={productValue}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  id="controllable-states-demo"
                  onChange={() => {}}
                  options={products}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product" />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  fullWidth
                  value={categoryCodeValue}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  id="controllable-states-demo"
                  onChange={() => {}}
                  options={categoryCodes}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Category Code" />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Autocomplete
                  value={branchValue}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  id="controllable-states-demo"
                  onChange={() => {}}
                  options={branches}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Branch" />
                  )}
                />
              </Grid>
              {/* </Stack> */}
            </Grid>
          </Grid>

          <Grid id="container3" container item spacing={1} justifyContent="space-between">
            <Grid id="con3Sub1" item xs={2}>
              <img src="../../dummyQR.png" alt="#" />
            </Grid>

            <Grid id="con3Sub2" item xs={6}>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="UMRN"
                  variant="filled"
                  type="text"
                  size="small"
                />

                <Autocomplete
                  fullWidth
                  value={sponserBankCodeValue}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  id="controllable-states-demo"
                  onChange={() => {}}
                  options={sponserBankCodes}
                  // sx={{ maxWidth: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sponser Bank Code" />
                  )}
                />
              </Stack>
            </Grid>

            <Grid id="con3Sub3" item xs={4}>
              <Stack spacing={1}>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                      label='Date on Mandate'
                      format="DD/MM/YYYY"
                    ></DatePicker>
                </LocalizationProvider>

                
                <Autocomplete
                  value={unityCodeValue}
                  size="small"
                  getOptionLabel={(option) => option.name}
                  id="controllable-states-demo"
                  onChange={() => {}}
                  options={unityCodes}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Unity Code" />
                  )}
                />
              </Stack>
            </Grid>
          </Grid>

          <Grid id="container4" container item spacing={1}>
            <Grid id="con4Sub1" container item xs={12} alignItems="center">
              <Grid item xs={4}>
                <Stack direction="row" spacing={1}>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    value="Create"
                    label="Create"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    value="Modify"
                    label="Modify"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    value="Cancel"
                    label="Cancel"
                  />
                </Stack>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="I/We hearby Authorize"
                  variant="filled"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid id="con4Sub2" container item xs={12}>
              <FormControl>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    To Debit
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Stack direction="row">
                      <FormControlLabel
                        value="SB"
                        control={<Radio size="small" />}
                        label="SB"
                      />
                      <FormControlLabel
                        value="CA"
                        control={<Radio size="small" />}
                        label="CA"
                      />
                      <FormControlLabel
                        value="CC"
                        control={<Radio size="small" />}
                        label="CC"
                      />
                      <FormControlLabel
                        value="SB-NRE"
                        control={<Radio size="small" />}
                        label="SB-NRE"
                      />
                      <FormControlLabel
                        value="SB-NRO"
                        control={<Radio size="small" />}
                        label="SB-NRO"
                      />
                      <FormControlLabel
                        value="Other"
                        control={<Radio size="small" />}
                        label="Other"
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </FormControl>
            </Grid>
          </Grid>

          <Grid id="container5" container item alignItems="center">
            <TextField
              fullWidth
              id="standard-basic"
              label="Bank A/C Number"
              variant="filled"
              type="number"
              size="small"
            />
          </Grid>

          <Grid id="container6" container item spacing={1}>
            {/* <Stack direction='row' alignItems='center' spacing={2}> */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="With Bank"
                variant="filled"
                type="text"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="IFSC"
                variant="filled"
                type="text"
                size="small"
                onClick={handleClickOpenAddUser}
              />
            </Grid>

            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>OR</Typography>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="MICR"
                  variant="filled"
                  type="number"
                  size="small"
                  onClick={handleClickOpenAddUser}
                />
              </Stack>
            </Grid>
            {/* </Stack> */}
          </Grid>

          <Grid id="container7" container item spacing={1}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                disabled
                id="standard-basic"
                label="Amount in Word"
                variant="filled"
                type="text"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Amount"
                variant="filled"
                type="number"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid id="container8" container item>
            <Stack direction="column">
              <FormControl>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Frequency
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Stack direction="row">
                      <FormControlLabel
                        value="Monthly"
                        control={<Radio size="small" />}
                        label="Monthly"
                      />
                      <FormControlLabel
                        value="Quarterly"
                        control={<Radio size="small" />}
                        label="Quarterly"
                      />
                      <FormControlLabel
                        value="Half-Yearly"
                        control={<Radio size="small" />}
                        label="Half-Yearly"
                      />
                      <FormControlLabel
                        value="Yearly"
                        control={<Radio size="small" />}
                        label="Yearly"
                      />
                      <FormControlLabel
                        value="As & When Presented"
                        control={<Radio size="small" />}
                        label="As & When Presented"
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </FormControl>

              <FormControl>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Debit Type
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Stack direction="row">
                      <FormControlLabel
                        value="Fixed Amount"
                        control={<Radio size="small" />}
                        label="Fixed Amount"
                      />
                      <FormControlLabel
                        value="Maximun Amount"
                        control={<Radio size="small" />}
                        label="Maximun Amount"
                      />
                      <FormControlLabel
                        value="Half-Yearly"
                        control={<Radio size="small" />}
                        label="Half-Yearly"
                      />
                      <FormControlLabel
                        value="Yearly"
                        control={<Radio size="small" />}
                        label="Yearly"
                      />
                      <FormControlLabel
                        value="As & When Presented"
                        control={<Radio size="small" />}
                        label="As & When Presented"
                      />
                    </Stack>
                  </RadioGroup>
                </Stack>
              </FormControl>
            </Stack>
          </Grid>

          <Grid id="container9" container item spacing={1}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Reference 1"
                variant="filled"
                type="number"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Phone Number"
                variant="filled"
                type="number"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid id="container10" container item spacing={1}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Reference 2"
                variant="filled"
                type="number"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email ID"
                variant="filled"
                type="email"
                size="small"
              />
            </Grid>
          </Grid>

          <Grid id="container11" container item>
            <TextField
              fullWidth
              id="standard-basic"
              label="Reference 3"
              variant="filled"
              type="number"
              size="small"
            />
          </Grid>

          <Grid id="container12" container item>
            <Typography variant="body2">
              I agree for the debit of mandate processing charges by the bank
              whom I am authorizing to debit my account as per latest schedule
              of charges of bank.
            </Typography>
          </Grid>

          <Grid id="container13" container item>
            <Typography variant="body1">Period</Typography>
          </Grid>

          <Grid id="container14" container item alignItems="start" spacing={1}>
            <Grid id="con14Sub1" container item xs={3} spacing={1}>
              {/* <Stack> */}
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label='From'
                    format="DD/MM/YYYY"  
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label='To'
                    format="DD/MM/YYYY"  
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography>Or</Typography>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Until Cancelled"
                  />
                </Stack>
              </Grid>
              {/* </Stack> */}
            </Grid>

            <Grid id="con14Sub2" container item xs={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Sign. Primary Acc. Holder"
                  variant="filled"
                  type="text"
                  size="small"
                />
                <Typography variant="body2">
                  1. Name as in Bank Records
                </Typography>
              </Grid>
            </Grid>
            <Grid id="con14Sub3" container item xs={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Sign. Secondary Acc. Holder"
                  variant="filled"
                  type="text"
                  size="small"
                />
                <Typography variant="body2">
                  1. Name as in Bank Records
                </Typography>
              </Grid>
            </Grid>
            <Grid id="con14Sub4" container item xs={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Sign. Tertiary Acc. Holder"
                  variant="filled"
                  type="text"
                  size="small"
                />
                <Typography variant="body2">
                  1. Name as in Bank Records
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid id="container15" container item>
            <Typography variant="body2">
              This is to confirm that declaration has been carefully read,
              understood and made by me/us. I'm authorizing the user
              Entity/Corporate to debit my account based on the instructions as
              agreed and signed by me. I've understood that I am authorized to
              cancel/amend this mandate by appropriately communicating the
              cancellation/amendment request to the User/Entity/Corporate or the
              bank where I've authorized the debit.
            </Typography>
          </Grid>
          <Grid id="btnContainer" container item>
            <Button>Save</Button>
          </Grid>
        </Grid>
      </FormGroup>

      <Dialog
        fullScreen
        open={show_IFSC_ValidationForm}
        onClose={handleCloseAddUser}
        TransitionComponent={Transition}
      >
        <IFSCValidation handleCloseAddUser={handleCloseAddUser} />
      </Dialog>
    </Container>
  );
}

export default NACHMandate;
