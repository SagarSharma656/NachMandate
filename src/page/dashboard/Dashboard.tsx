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
  Typography,
  useTheme,
  AppBar,
  Tabs,
  Tab,
} from "@mui/material";
// import AnalysisTab from "../../components/AnalysisTab";
// import MandateSearchTab from "../../components/MandateSearchTab";
import SearchIcon from '@mui/icons-material/Search';
import { Year } from "../../utils/types";
import React from "react";
import SwipeableViews from 'react-swipeableViews-views'

const btnStyle = {
  fontSize: "10px",
  px: 1,
  py: "2px",
  outline: "none",
  height: "0",
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

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}




function Dashboard() {
  const [bankValue, setBankValue] = useState<Bank | null>();

  const [yearValue, setYearValue] = useState <Year | null>();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
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
    
      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>

      {/* <Grid
        container
        sx={{
          // width: "100%",
          minHeight: "450px",
          border: "0.1px solid lightgray",
          padding: 1,
          gap: 2,
          margin: 0,
        }}
      >
        {tab === "Analysis" ? <AnalysisTab /> : <MandateSearchTab />}
      </Grid> */}
    </Container>
  );
}

export default Dashboard;
