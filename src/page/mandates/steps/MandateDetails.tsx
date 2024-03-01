import { Box, Stack, width } from "@mui/system";
import { useState } from "react";
import { Autocomplete, TextField, Grid, Typography } from "@mui/material";
import {
  Instrument,
  AutoCollectionDate,
  Branch,
  CategoryCode,
  DebitType,
  Frequency,
  Product,
} from "../../../utils/types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const instrument: Instrument[] = [ 
  {
    id: 'Debit',
    name: 'Debit',
  }
];
const categoryCodes: CategoryCode[] = [
  {
    id: "A001-API mandate",
    name: "A001-API mandate",
  },
  {
    id: "C001-B2B Corporate",
    name: "C001-B2B Corporate",
  },
  {
    id: "B001-Bill Payment Credit card",
    name: "B001-Bill Payment Credit card",
  },
  {
    id: "D001-Destination Bank Mandate",
    name: "D001-Destination Bank Mandate",
  },
  {
    id: "E001-Education fees",
    name: "E001-Education fees",
  },
  {
    id: "I001-Insurance Premium",
    name: "I001-Insurance Premium",
  },
  {
    id: "I002-Insurance other payment",
    name: "I002-Insurance other payment",
  },
  {
    id: "L001-Loan instalment payment",
    name: "L001-Loan instalment payment",
  },
  {
    id: "L002-Loan amount security",
    name: "L002-Loan amount security",
  },
  {
    id: "M001-Mutual Fund Payment",
    name: "M001-Mutual Fund Payment",
  },
  {
    id: "U099-Others",
    name: "U099-Others",
  },
  {
    id: "F001-Subscription Fees",
    name: "F001-Subscription Fees",
  },
  {
    id: "T001-Tax Payment",
    name: "T001-Tax Payment",
  },
  {
    id: "T002-TReDS",
    name: "T002-TReDS",
  },
  {
    id: "U001-Utility Bill Payment Electricity",
    name: "U001-Utility Bill Payment Electricity",
  },
  {
    id: "U003-Utility Bill payment Gas Supply Cos",
    name: "U003-Utility Bill payment Gas Supply Cos",
  },
  {
    id: "U005-Utility Bill payment mobile telephone broadband",
    name: "U005-Utility Bill payment mobile telephone broadband",
  },
  {
    id: "U006-Utility Bill payment water",
    name: "U006-Utility Bill payment water",
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
  {
    id: "29th of every month",
    name: "29th of every month",
  },
  {
    id: "30th of every month",
    name: "30th of every month",
  },
  {
    id: "31st of every month",
    name: "31st of every month",
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
const frequency: Frequency[] = [
  {
    id: "Monthly",
    name: "Monthly",
  },
  {
    id: "Quarterly",
    name: "Quarterly",
  },
  {
    id: "Half-Yearly",
    name: "Half-Yearly",
  },
  {
    id: "Yearly",
    name: "Yearly",
  },
  {
    id: "As & When Presented",
    name: "As & When Presented",
  },
];
const debitType: DebitType[] = [
  {
    id: "Fixed Amount",
    name: "Fixed Amount",
  },
  {
    id: "Maximum Amount",
    name: "Maximum Amount",
  },
];


function MandateDetails() {
  const [instrumentValue, setInstrumentValue] = useState<Instrument | null>();
  const [categoryCodeValue, setCategoryCodeValue] = useState<CategoryCode | null>();
  const [autoCollectionDateValue, setAutoCollectionDateValue] = useState<AutoCollectionDate | null>();
  const [productValue, setProductValue] = useState<Product | null>();
  const [branchValue, setBranchValue] = useState<Branch | null>();
  const [frequencyValue, setFrequencyValue] = useState<Frequency | null>();
  const [debitTypeValue, setDebitTypeValue] = useState<DebitType | null>();

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
            Mandate Details
          </Typography>
          <Autocomplete
            value={instrument[0]}
            size="small"
            id="controllable-states-demo"
            getOptionLabel={(option)=> option.name}
            options={instrument}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Instrument" />
            )}
          />

          <Autocomplete
            value={categoryCodeValue}
            size="small"
            getOptionLabel={(option) => option.name}
            id="controllable-states-demo"
            onChange={() => {}}
            options={categoryCodes}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <Autocomplete
            value={autoCollectionDateValue}
            size="small"
            getOptionLabel={(option) => option.name}
            id="controllable-states-demo"
            onChange={() => {}}
            options={autoCollectionDates}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Auto Collection Date" />
            )}
          />

          <Stack direction="row" pb={1} gap={1}>
            <Autocomplete
              value={productValue}
              size="small"
              getOptionLabel={(option) => option.name}
              id="controllable-states-demo"
              onChange={() => {}}
              options={products}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Product" />
              )}
            />
            <Autocomplete
              value={branchValue}
              size="small"
              getOptionLabel={(option) => option.name}
              id="controllable-states-demo"
              onChange={() => {}}
              options={branches}
              fullWidth
              renderInput={(params) => <TextField {...params} label="Branch" />}
            />
          </Stack>

          <Stack direction="row" pb={1} gap={1}>
            <Autocomplete
              value={frequencyValue}
              size="small"
              getOptionLabel={(option) => option.name}
              id="controllable-states-demo"
              onChange={() => {}}
              options={frequency}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Frequency" />
              )}
            />
            <Autocomplete
              value={debitTypeValue}
              size="small"
              getOptionLabel={(option) => option.name}
              id="controllable-states-demo"
              onChange={() => {}}
              options={debitType}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Debit Type" />
              )}
            />
          </Stack>

          <TextField
            id="outlined-basic"
            label="Amount to Debit"
            type="text"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ pb: 1 }}
          />

          <Stack direction="row" pb={1} gap={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="From"
                slots={<TextField size="small" />}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="To"
                slots={<TextField size="small" />}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Stack>
        </form>
      </Grid>
    </Box>
  );
}

export default MandateDetails;
