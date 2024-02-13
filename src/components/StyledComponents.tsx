import { CheckBox } from "@mui/icons-material";
import { Autocomplete, Box, InputLabel, Radio, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

export const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  "& .MuiInputBase-input": {
    height: 13,
    padding: "7px 5px",
    fontSize: "14px",
  },
});

export const StyledTypography = styled(Typography, {
  name: "StyledTypography",
})({
  minWidth: 'maxContent',
  fontSize: 13,
  margin: "2px 0px",
});


export const StyledAutocomplete = styled(Autocomplete, {
  name: "StyledAutocomplete",
})({
  "& .MuiOutlinedInput-root": {
    padding: "0 0 0 0",
    height: 28,
    fontSize: "15px",
  },
  "& .MuiInputBase-input": {
    height: 13,
  }
});

export const StyledInputLabel = styled(InputLabel, {
  name: 'StyledInputLabel',
})({
  fontSize: '12px'
});

export const StyledBox = styled(Box, {
  name: 'StyledBox',
})({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
})

export const StyledDatePicker = styled(DatePicker, {
  name: "StyledDatePicker",
})({
  "& .MuiOutlinedInput-root": {
    height: 28,
    fontSize: "15px",
  },
  "& .MuiInputBase-input": {
    height: 13,
  },
});

export const StyledRadio = styled(Radio, {
  name: 'StyledRadio',
})({
  padding: 0,
})