import style from "../../styles/NACHMandate.module.css";
import IFSCValidation from "../../components/IFSCValidation";
import { useState } from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
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

import { CalendarIcon, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  StyledAutocomplete,
  StyledTypography,
  StyledTextField,
  StyledInputLabel, 
  StyledBox,
  StyledDatePicker,
  StyledRadio,
} from "../../components/StyledComponents";

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

  const[check, setCheck] = useState(false);
  console.log(check);

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
    <Box id={style.wrapper} sx={{ position: "relative", padding: 1 }}>
      <FormGroup id={style.fromContainer} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid id="container1" container item>
            <Grid
              item
              xs={4}
              display={"flex"}
              flexDirection={"row"}
              alignItems="center"
            >
              <StyledBox>
                <StyledInputLabel
                  htmlFor="sms-lang"
                  style={{ minWidth: "max-content" }}
                >
                  SMS Language
                </StyledInputLabel>
                <StyledAutocomplete
                  fullWidth
                  value={languageValue}
                  getOptionLabel={(option: any) => option.name}
                  id="sms-lang"
                  onChange={() => {}}
                  options={languages}
                  renderInput={(params) => <TextField {...params} />}
                />
              </StyledBox>
            </Grid>

            <Grid
              item
              xs={8}
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box>
                <Typography fontSize="11px">
                  E-Mandate Authorization Date
                </Typography>
                <Typography fontSize="11px"></Typography>
              </Box>

              <Box>
                <Typography fontSize="11px">Current Mandate Status</Typography>
                <Typography fontSize="11px"></Typography>
              </Box>

              <Box>
                <Typography fontSize="11px">Mandate Mode</Typography>
                <Typography fontSize="11px"></Typography>
              </Box>

              <Box>
                <Typography fontSize="11px">Mandate ID</Typography>
                <Typography fontSize="11px"></Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid id="container2" container item>
            <StyledBox>
              <Grid xs={2.5} item>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Auto-Collection-Amount"
                    style={{ minWidth: "max-content" }}
                  >
                    Auto Collection Amount
                  </StyledInputLabel>
                  <StyledTextField
                    fullWidth
                    id="Auto-Collection-Amount"
                    variant="outlined"
                    type="number"
                    size="small"
                  />
                </StyledBox>
              </Grid>
              <Grid xs={2.5} item>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Auto-Collection-Date"
                    style={{ minWidth: "max-content" }}
                  >
                    Auto Collection Date
                  </StyledInputLabel>
                  <StyledAutocomplete
                    fullWidth
                    value={autoCollectionDateValue}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    id="Auto-Collection-Date"
                    onChange={() => {}}
                    options={autoCollectionDates}
                    renderInput={(params) => <StyledTextField {...params} />}
                  />
                </StyledBox>
              </Grid>
              <Grid xs={2.5} item>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Product"
                    style={{ minWidth: "max-content" }}
                  >
                    Product
                  </StyledInputLabel>
                  <StyledAutocomplete
                    fullWidth
                    value={productValue}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    id="Product"
                    onChange={() => {}}
                    options={products}
                    renderInput={(params) => <StyledTextField {...params} />}
                  />
                </StyledBox>
              </Grid>
              <Grid xs={2.5} item>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Category-Code"
                    style={{ minWidth: "max-content" }}
                  >
                    Category Code
                  </StyledInputLabel>
                  <StyledAutocomplete
                    fullWidth
                    value={categoryCodeValue}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    id="Category-Code"
                    onChange={() => {}}
                    options={categoryCodes}
                    renderInput={(params) => <StyledTextField {...params} />}
                  />
                </StyledBox>
              </Grid>
              <Grid xs={2} item>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Branch"
                    style={{ minWidth: "max-content" }}
                  >
                    Branch
                  </StyledInputLabel>
                  <StyledAutocomplete
                    fullWidth
                    value={branchValue}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    id="Branch"
                    onChange={() => {}}
                    options={branches}
                    renderInput={(params) => <StyledTextField {...params} />}
                  />
                </StyledBox>
              </Grid>
            </StyledBox>
          </Grid>

          <Grid id="container3" container item justifyContent="space-between">
            <Grid id="con3Sub1" item xs={1.8}>
              <img src="../../dummyQR.png" alt="#" />
            </Grid>

            <Grid id="con3Sub2" item xs={6}>
              <Box display="flex" flexDirection="column" gap={2}>
                <StyledBox>
                  <StyledInputLabel htmlFor="UMRN" style={{ width: 140 }}>
                    UMRN
                  </StyledInputLabel>
                  <StyledTextField
                    fullWidth
                    id="UMRN"
                    variant="outlined"
                    type="text"
                    size="small"
                  />
                </StyledBox>

                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Sponser-Bank-Code"
                    style={{ width: 140 }}
                  >
                    Sponser Bank Code
                  </StyledInputLabel>
                  <StyledAutocomplete
                    fullWidth
                    value={sponserBankCodeValue}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    id="Sponser-Bank-Code"
                    onChange={() => {}}
                    options={sponserBankCodes}
                    renderInput={(params) => <StyledTextField {...params} />}
                  />
                </StyledBox>
              </Box>
            </Grid>

            <Grid id="con3Sub3" item xs={4}>
              <Box display="flex" flexDirection="column" gap={2}>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="Date-on-Mandate"
                    style={{ width: 140 }}
                  >
                    Date on Mandate
                  </StyledInputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePicker
                      sx={{ width: "100%" }}
                      format="DD/MM/YYYY"
                    ></StyledDatePicker>
                  </LocalizationProvider>
                </StyledBox>

                <StyledBox>
                  <StyledInputLabel htmlFor="Unity-Code" style={{ width: 140 }}>
                    Unity Code
                  </StyledInputLabel>
                  <StyledAutocomplete
                    fullWidth
                    value={unityCodeValue}
                    size="small"
                    getOptionLabel={(option: any) => option.name}
                    id="Unity-Code"
                    onChange={() => {}}
                    options={unityCodes}
                    renderInput={(params) => <StyledTextField {...params} />}
                  />
                </StyledBox>
              </Box>
            </Grid>
          </Grid>

          <Grid id="container4" container item>
            <StyledBox>
              <Grid item xs={3}>
                <StyledBox>
                  <StyledBox>
                    <StyledInputLabel
                      htmlFor="Create"
                      style={{ minWidth: "max-content" }}
                    >
                      Create
                    </StyledInputLabel>
                    <Checkbox size="small" id="Create" />
                  </StyledBox>

                  <StyledBox>
                    <StyledInputLabel
                      htmlFor="Modify"
                      style={{ minWidth: "max-content" }}
                    >
                      Modify
                    </StyledInputLabel>
                    <Checkbox size="small" id="Modify" />
                  </StyledBox>

                  <StyledBox>
                    <StyledInputLabel
                      htmlFor="Cancel"
                      style={{ minWidth: "max-content" }}
                    >
                      Cancel
                    </StyledInputLabel>
                    <Checkbox size="small" id="Cancel" />
                  </StyledBox>
                </StyledBox>
              </Grid>

              <Grid item xs={5}>
                <StyledBox>
                  <StyledInputLabel
                    htmlFor="I/We-hearby-Authorize"
                    style={{ width: 200 }}
                  >
                    I/We hearby Authorize
                  </StyledInputLabel>
                  <StyledTextField
                    fullWidth
                    id="I/We-hearby-Authorize"
                    variant="outlined"
                    type="text"
                    size="small"
                  />
                </StyledBox>
              </Grid>

              <Grid item xs={5}>
                <StyledBox>
                  <StyledTypography sx={{ minWidth: "max-content" }}>
                    To Debit
                  </StyledTypography>

                  <StyledBox>
                    <RadioGroup>
                      <StyledBox>
                        <StyledBox>
                          <StyledRadio size="small" id="SB" value="SB" />
                          <StyledInputLabel
                            htmlFor="SB"
                            style={{ minWidth: "max-content" }}
                          >
                            SB
                          </StyledInputLabel>
                        </StyledBox>

                        <StyledBox>
                          <StyledRadio size="small" id="CA" value="CA" />
                          <StyledInputLabel
                            htmlFor="CA"
                            style={{ minWidth: "max-content" }}
                          >
                            CA
                          </StyledInputLabel>
                        </StyledBox>

                        <StyledBox>
                          <StyledRadio size="small" id="CC" value="CC" />
                          <StyledInputLabel
                            htmlFor="CC"
                            style={{ minWidth: "max-content" }}
                          >
                            CC
                          </StyledInputLabel>
                        </StyledBox>

                        <StyledBox>
                          <StyledRadio
                            size="small"
                            id="SB-NRE"
                            value="SB-NRE"
                          />
                          <StyledInputLabel
                            htmlFor="SB-NRE"
                            style={{ minWidth: "max-content" }}
                          >
                            SB-NRE
                          </StyledInputLabel>
                        </StyledBox>

                        <StyledBox>
                          <StyledRadio
                            size="small"
                            id="SB-NRO"
                            value="SB-NRO"
                          />
                          <StyledInputLabel
                            htmlFor="SB-NRO"
                            style={{ minWidth: "max-content" }}
                          >
                            SB-NRO
                          </StyledInputLabel>
                        </StyledBox>

                        <StyledBox>
                          <StyledRadio size="small" id="Other" value="Other" />
                          <StyledInputLabel
                            htmlFor="Other"
                            style={{ minWidth: "max-content" }}
                          >
                            Other
                          </StyledInputLabel>
                        </StyledBox>
                      </StyledBox>
                    </RadioGroup>
                  </StyledBox>
                </StyledBox>
              </Grid>
            </StyledBox>
          </Grid>

          <Grid id="container5" container item alignItems="center">
            <StyledBox>
              <StyledInputLabel
                htmlFor="Bank-A/C-Number"
                style={{ minWidth: 100 }}
              >
                Bank A/C Number
              </StyledInputLabel>
              <StyledTextField
                fullWidth
                id="Bank-A/C-Number"
                variant="outlined"
                type="number"
                size="small"
              />
            </StyledBox>
          </Grid>

          <Grid id="container6" container item>
            <StyledBox>
              <StyledBox>
                <StyledInputLabel htmlFor="With-Bank" sx={{ minWidth: 100 }}>
                  With Bank
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="With-Bank"
                  variant="outlined"
                  type="text"
                  size="small"
                />
              </StyledBox>

              <StyledBox>
                <StyledInputLabel
                  htmlFor="IFSC"
                  style={{ minWidth: "max-content" }}
                >
                  IFSC
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="IFSC"
                  variant="outlined"
                  type="text"
                  size="small"
                  onClick={handleClickOpenAddUser}
                />
              </StyledBox>

              <StyledTypography>OR</StyledTypography>

              <StyledBox>
                <StyledInputLabel
                  htmlFor=""
                  style={{ minWidth: "max-content" }}
                >
                  MICR
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="standard-basic"
                  variant="outlined"
                  type="number"
                  size="small"
                  onClick={handleClickOpenAddUser}
                />
              </StyledBox>
            </StyledBox>
          </Grid>

          <Grid id="container7" container item>
            <StyledBox>
              <StyledBox>
                <StyledInputLabel
                  htmlFor="Amount-in-Word"
                  style={{ minWidth: 100 }}
                >
                  Amount in Word
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Amount-in-Word"
                  variant="outlined"
                  type="text"
                  size="small"
                />
              </StyledBox>

              <StyledBox>
                <StyledInputLabel htmlFor="Amount" style={{ minWidth: 90 }}>
                  Amount
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Amount"
                  variant="outlined"
                  type="number"
                  size="small"
                />
              </StyledBox>
            </StyledBox>
          </Grid>

          <Grid id="container8" container item>
            <StyledBox>
              <StyledBox>
                <StyledTypography style={{ minWidth: 100 }}>
                  Frequency
                </StyledTypography>

                <RadioGroup>
                  <StyledBox>
                    <StyledBox>
                      <StyledRadio size="small" id="Monthly" value="Monthly" />
                      <StyledInputLabel
                        htmlFor="Monthly"
                        style={{ minWidth: "max-content" }}
                      >
                        Monthly
                      </StyledInputLabel>
                    </StyledBox>

                    <StyledBox>
                      <StyledRadio
                        size="small"
                        id="Quarterly"
                        value="Quarterly"
                      />
                      <StyledInputLabel
                        htmlFor="Quarterly"
                        style={{ minWidth: "max-content" }}
                      >
                        Quarterly
                      </StyledInputLabel>
                    </StyledBox>

                    <StyledBox>
                      <StyledRadio
                        size="small"
                        id="Half-Yearly"
                        value="Half-Yearly"
                      />
                      <StyledInputLabel
                        htmlFor="Half-Yearly"
                        style={{ minWidth: "max-content" }}
                      >
                        Half-Yearly
                      </StyledInputLabel>
                    </StyledBox>

                    <StyledBox>
                      <StyledRadio size="small" id="Yearly" value="Yearly" />
                      <StyledInputLabel
                        htmlFor="Yearly"
                        style={{ minWidth: "max-content" }}
                      >
                        Yearly
                      </StyledInputLabel>
                    </StyledBox>

                    <StyledBox>
                      <StyledRadio
                        size="small"
                        id="As-and-When-Presented"
                        value="As & When Presented"
                      />
                      <StyledInputLabel
                        htmlFor="As-and-When-Presented"
                        style={{ minWidth: "max-content" }}
                      >
                        As & When Presented
                      </StyledInputLabel>
                    </StyledBox>
                  </StyledBox>
                </RadioGroup>
              </StyledBox>

              <StyledBox>
                <StyledTypography style={{ minWidth: 90 }}>
                  Debit Type
                </StyledTypography>

                <RadioGroup>
                  <StyledBox>
                    <StyledBox>
                      <StyledRadio
                        size="small"
                        id="Fixed-Amount"
                        value="Fixed Amount"
                      />
                      <StyledInputLabel
                        htmlFor="Fixed-Amount"
                        style={{ minWidth: "max-content" }}
                      >
                        Fixed Amount
                      </StyledInputLabel>
                    </StyledBox>

                    <StyledBox>
                      <StyledRadio
                        size="small"
                        id="Maximun-Amount"
                        value="Maximun Amount"
                      />
                      <StyledInputLabel
                        htmlFor="Maximun-Amount"
                        style={{ minWidth: "max-content" }}
                      >
                        Maximun Amount
                      </StyledInputLabel>
                    </StyledBox>
                  </StyledBox>
                </RadioGroup>
              </StyledBox>
            </StyledBox>
          </Grid>

          <Grid id="container9" container item>
            <StyledBox>
              <StyledBox>
                <StyledInputLabel
                  htmlFor="Reference-1"
                  style={{ minWidth: 100 }}
                >
                  Reference 1
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Reference-1"
                  variant="outlined"
                  type="number"
                  size="small"
                />
              </StyledBox>

              <StyledBox>
                <StyledInputLabel
                  htmlFor="Phone-Number"
                  style={{ minWidth: 90 }}
                >
                  Phone Number
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Phone-Number"
                  variant="outlined"
                  type="number"
                  size="small"
                />
              </StyledBox>
            </StyledBox>
          </Grid>

          <Grid id="container10" container item>
            <StyledBox>
              <StyledBox>
                <StyledInputLabel
                  htmlFor="Reference-2"
                  style={{ minWidth: 100 }}
                >
                  Reference 2
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Reference-2"
                  variant="outlined"
                  type="number"
                  size="small"
                />
              </StyledBox>

              <StyledBox>
                <StyledInputLabel htmlFor="Email-ID" style={{ minWidth: 90 }}>
                  Email ID
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Email-ID"
                  variant="outlined"
                  type="email"
                  size="small"
                />
              </StyledBox>
            </StyledBox>
          </Grid>

          <Grid id="container11" container item>
            <StyledBox>
              <StyledInputLabel htmlFor="Reference-3" style={{ minWidth: 100 }}>
                Reference 3
              </StyledInputLabel>
              <StyledTextField
                fullWidth
                id="Reference-3"
                variant="outlined"
                type="number"
                size="small"
              />
            </StyledBox>
          </Grid>

          <Grid id="container12" container item>
            <Typography fontSize={11}>
              I agree for the debit of mandate processing charges by the bank
              whom I am authorizing to debit my account as per latest schedule
              of charges of bank.
            </Typography>
          </Grid>

          <Grid id="container13" container item>
            <Typography variant="body1">Period</Typography>
          </Grid>

          <Grid id="container14" container item alignItems="start">
            <StyledBox>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <StyledBox>
                  <StyledInputLabel htmlFor="From" style={{ minWidth: 100 }}>
                    From
                  </StyledInputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePicker
                      format="DD/MM/YYYY"
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </StyledBox>

                <StyledBox>
                  <StyledInputLabel htmlFor="to" style={{ minWidth: 100 }}>
                    To
                  </StyledInputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePicker
                      format="DD/MM/YYYY"
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </StyledBox>

                <Box display="flex" alignItems="center" width="100%">
                  <StyledTypography style={{ minWidth: 100 }}>
                    Or
                  </StyledTypography>
                  <StyledBox>
                    <Checkbox id="Until-Cancelled" size="small" />
                    <StyledInputLabel
                      htmlFor="Until-Cancelled"
                      style={{ minWidth: "max-content" }}
                    >
                      Until Cancelled
                    </StyledInputLabel>
                  </StyledBox>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <StyledInputLabel
                  htmlFor="Sign-Primary-Acc-Holder"
                  style={{ minWidth: "max-content" }}
                >
                  Sign. Primary Acc. Holder
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Sign-Primary-Acc-Holder"
                  variant="outlined"
                  type="text"
                  size="small"
                />
                <StyledTypography>1. Name as in Bank Records</StyledTypography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <StyledInputLabel
                  htmlFor="Sign-Secondary-Acc-Holder"
                  style={{ minWidth: "max-content" }}
                >
                  Sign. Secondary Acc. Holder
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Sign-Secondary-Acc-Holder"
                  variant="outlined"
                  type="text"
                  size="small"
                />
                <StyledTypography>1. Name as in Bank Records</StyledTypography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <StyledInputLabel
                  htmlFor="Sign-Tertiary-Acc-Holder"
                  style={{ minWidth: "max-content" }}
                >
                  Sign. Tertiary Acc. Holder
                </StyledInputLabel>
                <StyledTextField
                  fullWidth
                  id="Sign-Tertiary-Acc-Holder"
                  variant="outlined"
                  type="text"
                  size="small"
                />
                <StyledTypography>1. Name as in Bank Records</StyledTypography>
              </Box>
            </StyledBox>
          </Grid>

          <Grid id="container15" container item>
            <Typography fontSize={11}>
              This is to confirm that declaration has been carefully read,
              understood and made by me/us. I'm authorizing the user
              Entity/Corporate to debit my account based on the instructions as
              agreed and signed by me. I've understood that I am authorized to
              cancel/amend this mandate by appropriately communicating the
              cancellation/amendment request to the User/Entity/Corporate or the
              bank where I've authorized the debit.
            </Typography>
          </Grid>
          <Grid
            id="btnContainer"
            container
            item
            width={"100%"}
            justifyContent={"end"}
          >
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
    </Box>
  );
}

export default NACHMandate;
