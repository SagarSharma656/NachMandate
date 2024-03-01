import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material'
import { Mandate, SponserBankCode, UtilityCode } from '../../../utils/types';
import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const mandate: Mandate[] = [
  {
    id: "Create",
    name: "Create",
  },
  {
    id: "Modification",
    name: "Modification",
  },
  {
    id: "Cancel",
    name: "Cancel",
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
const utilityCodes: UtilityCode[] = [
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

function Corporate() {
  const [mandateValue, setMandateValue] = useState<Mandate | null>();
  const [sponserBankValue, setSponserBankValue] = useState<SponserBankCode | null>();
  const [utilityCodeValue, setUtilityCodeValue] = useState<UtilityCode | null>();

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
            Corporate
          </Typography>
          <Autocomplete
            value={mandateValue}
            size="small"
            id="controllable-states-demo"
            getOptionLabel={(option) => option.name}
            options={mandate}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => <TextField {...params} label="Mandate" />}
          />
          <Autocomplete
            value={sponserBankValue}
            size="small"
            id="controllable-states-demo"
            getOptionLabel={(option) => option.name}
            options={sponserBankCodes}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Sponser Bank Codes" />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date on Mandate"
              slots={<TextField size="small" />}
              sx={{ width: "100%", pb: 1 }}
            />
          </LocalizationProvider>

          <Autocomplete
            value={utilityCodeValue}
            size="small"
            id="controllable-states-demo"
            getOptionLabel={(option) => option.name}
            options={utilityCodes}
            fullWidth
            sx={{ pb: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="Utility Code" />
            )}
          />
        </form>
      </Grid>
    </Box>
  );
}

export default Corporate;