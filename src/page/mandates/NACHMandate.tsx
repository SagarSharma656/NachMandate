import style from "../../styles/NACHMandate.module.css";
import IFSCValidation from "../../components/IFSCValidation";
import { useState } from "react";
import {
  Autocomplete,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AutoCollectionDate, Branch, CategoryCode, Language, MandateFormDataObject, Product, SponserBankCode, UnityCode } from "../../utils/types";



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
    id:"2nd of every month",
    name:"2nd of every month",
  },
  {
    id:"3rd of every month",
    name:"3rd of every month",
  },
  {
    id: "4th of every month",
    name:"4th of every month",
  },
  {
    id: "5th of every month",
    name: "5th of every month",
  },
  {
    id:"6th of every month",
    name:"6th of every month",
  },
  {
    id:"7th of every month",
    name:"7th of every month",
  },
  {
    id:"8th of every month",
    name:"8th of every month",
  },
  {
    id:"9th of every month",
    name:"9th of every month",
  },
  {
    id:"10th of every month",
    name:"10th of every month",
  },
  {
    id:"11th of every month",
    name:"11th of every month",
  },
  {
    id:"12th of every month",
    name:"12th of every month",
  },
  {
    id:"13th of every month",
    name:"13th of every month",
  },
  {
    id:"14th of every month",
    name:"14th of every month",
  },
  {
    id:"15th of every month",
    name:"15th of every month",
  },
  {
    id:"16th of every month",
    name:"16th of every month",
  },
  {
    id:"17th of every month",
    name:"17th of every month",
  },
  {
    id:"18th of every month",
    name:"18th of every month",
  },
  {
    id:"19th of every month",
    name:"19th of every month",
  },
  {
    id:"20th of every month",
    name:"20th of every month",
  },
  {
    id:"21th of every month",
    name:"21th of every month",
  },
  {
    id:"22th of every month",
    name:"22th of every month",
  },
  {
    id:"23rd of every month",
    name:"23rd of every month",
  },
  {
    id:"24th of every month",
    name:"24th of every month",
  },
  {
    id:"25th of every month",
    name:"25th of every month",
  },
  {
    id:"26th of every month",
    name:"26th of every month",
  },
  {
    id:"27th of every month",
    name:"27th of every month",
  },
  {
    id:"28th of every month",
    name:"28th of every month",
  },
];
const products : Product[] = [
  {
    id: "HOMELOAN",
    name: "HOMELOAN",
  },
  {
    id:"LOAN AGAINST PROPERTY",
    name:"LOAN AGAINST PROPERTY",
  },
  {
    id:"PERSONAL LOAN",
    name:"PERSONAL LOAN",
  },
  {
    id:"SPLN",
    name:"SPLN",
  }
];
const categoryCodes: CategoryCode[] = [
  {
    id:"LOAN INSTALMENT PAYMENT - L001",
    name:"LOAN INSTALMENT PAYMENT - L001",
  }
];
const branches: Branch[] = [
  {
    id:"JAIPUR",
    name:"JAIPUR",
  },
  {
    id:"DELHI",
    name:"DELHI",
  },
  {
    id:"SURAT",
    name:"SURAT",
  },
  {
    id:"PATIALA",
    name:"PATIALA",
  },
  {
    id:"NAGPUR",
    name:"NAGPUR",
  }
];
const sponserBankCodes: SponserBankCode[] = [
  {
    id: 'HDFC',
    name: 'HDFC',
  },
  {
    id: 'IDFC BANK',
    name: 'IDFC BANK',
  },
  {
    id: 'KOTAK MAHINDRA BANK',
    name: 'KOTAK MAHINDRA BANK',
  },
]
const unityCodes: UnityCode[] =[
  {
    id: 'NACH00000000017335',
    name: 'NACH00000000017335',
  },
  {
    id: 'NACH00000000017335',
    name: 'NACH00000000017335',
  },
  {
    id: 'NACH00000000001977',
    name: 'NACH00000000001977',
  },
]

function NACHMandate() {
  const [languageValue, setLanguageValue] = useState<Language | null>();
  const [autoCollectionDateValue, setAutoCollectionDateValue] = useState<AutoCollectionDate | null>();
  const [productValue, setProductValue] = useState<Product | null>();
  const [categoryCodeValue, setCategoryCodeValue] = useState<CategoryCode | null>();
  const [branchValue, setBranchValue] = useState<Branch | null>();
  const [sponserBankCodeValue, setSponserBankCodeValue] = useState<SponserBankCode | null>();
  const [unityCodeValue] = useState<UnityCode | null>();


  const UnityCodeArr: string[] = [
    "NACH00000000017335",
    "NACH00000000017335",
    "NACH00000000001977",
  ];



  const [formData, setFormData] = useState<MandateFormDataObject>({
    language: "",
    autoCollectionAmount: "",
    autoCollectionDate: "",
    product: "",
    categoryCode: "",
    branch: "",
    UMRN: "",
    dateOnMandate: "",
    sponserBankCode: "",
    unityCode: "",
    create: false,
    modify: false,
    cancel: false,
    I_WehearbyAuthorize: "",
    toDebit: "",
    bankAC_Number: "",
    withBank: "",
    IFSC: "",
    MICR: "",
    anAmountOrRupees: "",
    frequency: "",
    debitType: "",
    reference1: "",
    reference2: "",
    reference3: "",
    phoneNumber: "",
    emailID: "",
    periodFrom: "",
    periodTo: "",
    untilCancelled: "",
    signPrimaryAccHolder: "",
    signSecondaryAccHolder: "",
    signTertiaryAccHolder: "",
  });

  const [show_IFSC_ValidationForm, setShow_IFSC_ValidationForm] =
    useState<boolean>(false);

  function handleOnChange(event: any) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData)

  }

  return (
    <Container id={style.wrapper}>
      <FormGroup id={style.fromContainer} onSubmit={handleSubmit}>
        <Grid id="container1" container justifyContent="space-between">
          <Grid item>
            <Autocomplete
              value={languageValue}
              size="small"
              getOptionLabel={(option) => option.name}
              id="controllable-states-demo"
              onChange={() => {}}
              options={languages}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Language" />
              )}
            />
          </Grid>

          <Grid item>
            <Grid item>
              <Typography fontSize="10px">
                E-Mandate Authorization Date
              </Typography>
            </Grid>

            <Grid item>
              <Typography fontSize="10px">Current Mandate Status</Typography>
            </Grid>

            <Grid item>
              <Typography fontSize="10px">Mandate Mode</Typography>
            </Grid>

            <Grid item>
              <Typography fontSize="10px">Mandate ID</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid id="container2" container>
          <Stack direction='row'>
            <Grid item>
              <TextField
                id="standard-basic"
                label="Auto Collection Amount"
                variant="standard"
                type="number"
              />
            </Grid>
            <Grid item>
              <Autocomplete
                value={autoCollectionDateValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={autoCollectionDates}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Auto Collection Date" />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                value={productValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={products}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Product" />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                value={categoryCodeValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={categoryCodes}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Category Code" />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                value={branchValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={branches}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Branch" />
                )}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid id='container3' container justifyContent='space-between'>
          <Grid id={style.con3Sub1} item>
            <img src="../../dummyQR.png" alt="#" />
          </Grid>

          <Grid id={style.con3Sub2}>

            <Stack>
              <TextField
                fullWidth
                id="standard-basic"
                label="UMRN"
                variant="standard"
                type="text"
                value={formData.UMRN}
                onChange={handleOnChange}
              />

              <Autocomplete
                fullWidth
                value={sponserBankCodeValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={sponserBankCodes}
                sx={{ maxWidth: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Sponser Bank Code" />
                )}
              />
            </Stack>
          </Grid>

          <Grid id='con3Sub3' item>
            <Stack>
              <TextField
                id="standard-basic"
                label="Date On Mandate"
                variant="standard"
                type="date"
                value={formData.dateOnMandate}
                onChange={handleOnChange}
              />
              <Autocomplete
                value={unityCodeValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={unityCodes}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Unity Code" />
                )}
              />
            </Stack>
          </Grid>
        </Grid>

        <Grid id='container4' container alignItems='center'>
          <Grid id='con4Sub1' item>
            <Stack direction='row'>
              <FormControlLabel 
                control={
                  <Checkbox 
                    value={formData.create}
                    onChange={handleOnChange}
                  />
                } 
                label="Create" 
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                    value={formData.modify}
                    onChange={handleOnChange}
                  />
                } 
                label="Modify" 
              />
              <FormControlLabel 
                control={
                  <Checkbox 
                    value={formData.cancel}
                    onChange={handleOnChange}
                  />
                } 
                label="Cancel" 
              />
            </Stack>
          </Grid>

          <Grid id='con4Sub2' item>
            <TextField
              fullWidth
              id="standard-basic"
              label="I/We hearby Authorize"
              variant="standard"
              type="text"
              value={formData.I_WehearbyAuthorize}
              onChange={handleOnChange}
            />
          </Grid>

          <Grid id='con4Sub3' item>
            <FormControl>
              <Stack direction='row' alignItems='center' spacing={2}>
                <FormLabel id="demo-radio-buttons-group-label">To Debit</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  >
                  <Stack direction='row'>
                    <FormControlLabel value="SB" control={<Radio />} label="SB" />
                    <FormControlLabel value="CA" control={<Radio />} label="CA" />
                    <FormControlLabel value="CC" control={<Radio />} label="CC" />
                    <FormControlLabel value="SB-NRE" control={<Radio />} label="SB-NRE" />
                    <FormControlLabel value="SB-NRO" control={<Radio />} label="SB-NRO" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </Stack>
                </RadioGroup>
              </Stack>
            </FormControl>
          </Grid>
        </Grid>

        <Grid id='container5' container alignItems='center'>

          <TextField
            fullWidth
            id="standard-basic"
            label="Bank A/C Number"
            variant="standard"
            type="number"
          />
        </Grid>

        <Grid id='container6' container alignItems='center'>

          <Stack direction='row' alignItems='center' spacing={2}>
            <TextField
              fullWidth
              id="standard-basic"
              label="With Bank"
              variant="standard"
              type="text"
              value={formData.withBank}
              onChange={handleOnChange}
            />

            <TextField
              fullWidth
              id="standard-basic"
              label="IFSC"
              variant="standard"
              type="text"
              onClick={() => {
                setShow_IFSC_ValidationForm(true);
              }}
            />
            <Typography>
              OR
            </Typography>

            <TextField
              fullWidth
              id="standard-basic"
              label="MICR"
              variant="standard"
              type="number"
              onClick={() => {
                setShow_IFSC_ValidationForm(true);
              }}
            />
          </Stack>
        </Grid>

        <Grid id='container7' container alignItems='center'>

          <Stack direction='row'>
            <TextField
              fullWidth
              disabled
              id="standard-basic"
              label="Amount in Word"
              variant="standard"
              type="text"
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Amount"
              variant="standard"
              type="number"
            />
          </Stack>
        </Grid>

        <div id={style.container8} className={style.container}>
          <label id={style.con8Sub1}>
            <p>Frequency</p>

            <div id={style.frequencyInputCon8}>
              <label>
                <input
                  type="radio"
                  name="frequency"
                  id="Monthly"
                  value="Monthly"
                  checked={formData.frequency === "Monthly"}
                  onChange={handleOnChange}
                />
                <p>Monthly</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="frequency"
                  id="Quarterly"
                  value="Quarterly"
                  checked={formData.frequency === "Quarterly"}
                  onChange={handleOnChange}
                />
                <p>Quarterly</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="frequency"
                  id="Half-Yearly"
                  value="Half-Yearly"
                  checked={formData.frequency === "Half-Yearly"}
                  onChange={handleOnChange}
                />
                <p>Half-Yearly</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="frequency"
                  id="Yearly"
                  value="Yearly"
                  checked={formData.frequency === "Yearly"}
                  onChange={handleOnChange}
                />
                <p>Yearly</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="frequency"
                  id="As&WhenPresented"
                  value="As & When Presented"
                  checked={formData.frequency === "As & When Presented"}
                  onChange={handleOnChange}
                />
                <p>As & When Presented</p>
              </label>
            </div>
          </label>

          <label id={style.con8Sub2}>
            <p>Debit Type</p>

            <div id={style.debitTypeCon8}>
              <label>
                <input
                  type="radio"
                  name="debitType"
                  id="FixedAmount"
                  value="Fixed Amount"
                  checked={formData.debitType === "Fixed Amount"}
                  onChange={handleOnChange}
                />
                <p>Fixed Amount</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="debitType"
                  id="MaximunAmount"
                  value="Maximun Amount"
                  checked={formData.debitType === "Maximun Amount"}
                  onChange={handleOnChange}
                />
                <p>Maximun Amount</p>
              </label>
            </div>
          </label>
        </div>

        <div id={style.container9} className={style.container}>
          <label id={style.con9Sub1}>
            <p>Reference 1</p>
            <input
              type="number"
              name="reference1"
              id="reference1"
              value={formData.reference1}
              onChange={handleOnChange}
            />
          </label>

          <label id={style.con9Sub2}>
            <p>Phone Number</p>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleOnChange}
            />
          </label>
        </div>

        <div id={style.container10} className={style.container}>
          <label id={style.con10Sub1}>
            <p>Reference 2</p>
            <input
              type="number"
              name="reference2"
              id="reference2"
              value={formData.reference2}
              onChange={handleOnChange}
            />
          </label>

          <label id={style.con10Sub2}>
            <p>Email ID</p>
            <input
              type="email"
              name="emailID"
              id="emailID"
              value={formData.emailID}
              onChange={handleOnChange}
            />
          </label>
        </div>

        <div id={style.container11} className={style.container}>
          <label>
            <p>Reference 3</p>
            <input
              type="number"
              name="reference3"
              id="reference3"
              value={formData.reference3}
              onChange={handleOnChange}
            />
          </label>
        </div>

        <div id={style.container12}>
          <p>
            I agree for the debit of mandate processing charges by the bank whom
            I am authorizing to debit my account as per latest schedule of
            charges of bank.
          </p>
        </div>

        <div id={style.container13} className={style.container}>
          <h3>Period</h3>
        </div>

        <div id={style.container14} className={style.container}>
          <div id={style.con14Sub1}>
            <label id={style.periodDateInputLabel}>
              <p>From</p>

              <input
                type="date"
                name="periodFrom"
                id="periodFrom"
                value={formData.periodFrom}
                onChange={handleOnChange}
              />
            </label>

            <label id={style.periodDateInputLabel}>
              <p>To</p>
              <input
                type="date"
                name="periodTo"
                id="periodTo"
                value={formData.periodTo}
                onChange={handleOnChange}
              />
            </label>

            <label>
              <p>Or</p>

              <label>
                <input
                  type="checkbox"
                  name="untilCancelled"
                  id="untilCancelled"
                  value={formData.untilCancelled}
                  onChange={handleOnChange}
                />
                <span>Until Cancelled</span>
              </label>
            </label>
          </div>

          <label id={style.con14Sub2}>
            <p>Sign. Primary Acc. Holder</p>

            <input
              type="text"
              name="signPrimaryAccHolder"
              id="signPrimaryAccHolder"
              value={formData.signPrimaryAccHolder}
              onChange={handleOnChange}
            />

            <p>1. Name as in Bank Records</p>
          </label>

          <label id={style.con14Sub3}>
            <p>Sign. Secondary Acc. Holder</p>
            <input
              type="text"
              name="signSecondaryAccHolder"
              id="signSecondaryAccHolder"
              value={formData.signSecondaryAccHolder}
              onChange={handleOnChange}
            />
            <p>2. Name as in Bank Records</p>
          </label>

          <label id={style.con14Sub4}>
            <p>Sign. Tertiary Acc. Holder</p>
            <input
              type="text"
              name="signTertiaryAccHolder"
              id="signTertiaryAccHolder"
              value={formData.signTertiaryAccHolder}
              onChange={handleOnChange}
            />
            <p>3. Name as in Bank Records</p>
          </label>
        </div>

        <div id={style.container15}>
          <p>
            This is to confirm that declaration has been carefully read,
            understood and made by me/us. I'm authorizing the user
            Entity/Corporate to debit my account based on the instructions as
            agreed and signed by me. I've understood that I am authorized to
            cancel/amend this mandate by appropriately communicating the
            cancellation/amendment request to the User/Entity/Corporate or the
            bank where I've authorized the debit.
          </p>
        </div>
        <div id={style.btnContainer} className={style.container}>
          <button>Save</button>
        </div>
      </FormGroup>

      {show_IFSC_ValidationForm ? (
        <div id={style.IFSC_ValidationFormContainer}>
          <IFSCValidation
            setShow_IFSC_ValidationForm={setShow_IFSC_ValidationForm}
          />
        </div>
      ) : null}
    </Container>
  );
}

export default NACHMandate;
