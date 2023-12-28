import { useState } from "react";
import {
  Container,
  Button,
  FormGroup,
  Grid,
  Stack,
  Autocomplete,
  TextField,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
// import AnalysisTab from "../../components/AnalysisTab";
// import MandateSearchTab from "../../components/MandateSearchTab";
import SearchIcon from '@mui/icons-material/Search';
import { Year } from "../../utils/types";
import React from "react";
import { CustomTabPanel } from "./CustomTabPanel";
import AnalysisTab from "../../components/AnalysisTab";
import MandateSearchTab from "../../components/MandateSearchTab";

const btnStyle = {
  fontSize: "10px",
  px: 1,
  py: "2px",
  outline: "none",
  height: "0",
  ":focus":{outline: 'none'}
};


interface Bank {
  id: string;
  name: string;
}
const banks: Bank[] = [
  {
    id: "1",
    name: "Bank1",
  },
  {
    id: "2",
    name: "Bank2",
  },
];


const years: Year[] = [
  {
    id: '2017',
    name: '2017'
  },
  {
    id: '2018',
    name: '2018'
  },
  {
    id: '2019',
    name: '2019'
  },
  {
    id: '2020',
    name: '2020'
  },
  {
    id: '2021',
    name: '2021'
  },
  {
    id: '2022',
    name: '2022'
  },
  {
    id: '2023',
    name: '2023'
  },
  {
    id: '2024',
    name: '2024'
  },
  {
    id: '2025',
    name: '2025'
  },
  {
    id: '2026',
    name: '2026'
  },
  {
    id: '2027',
    name: '2027'
  }
] 


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Dashboard() {
  const [bankValue, setBankValue] = useState<Bank | null>();

  const [yearValue, setYearValue] = useState <Year | null>();


  const [value, setValue] = React.useState(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 

 

  return (
    <Container sx={{paddingTop: 1}}>
      <Grid container justifyContent="space-between">
        <Grid item justifyContent="space-between">
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" sx={btnStyle}>
              FILTER
            </Button>

            <Button variant="outlined" sx={btnStyle}>
              GET DASHBOARD DATA
            </Button>
          </Stack>
        </Grid>

        <Grid item justifyContent="space-between">
          <FormGroup>
            <Stack direction="row" spacing={1}>
              <Autocomplete
                value={bankValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={banks}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Bank" />}
              />

              <Autocomplete
                value={yearValue}
                size="small"
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                onChange={() => {}}
                options={years}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Year" />}
              />
            </Stack>
          </FormGroup>
        </Grid>
      </Grid>
      <Grid container justifyContent='end'>
        <Button variant="outlined" sx={btnStyle}>
          <SearchIcon/>
          <span>Search</span>
        </Button>
      </Grid>
    

      <Box>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{width:'30%', ":focus":{outline: 'none'}}} label="Analysis" {...a11yProps(0)} />
          <Tab sx={{width:'30%', ":focus":{outline: 'none'}}} label="Mandate Search" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AnalysisTab/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MandateSearchTab/>
      </CustomTabPanel>
    </Box>
   
    </Container>
  );
}

export default Dashboard;
