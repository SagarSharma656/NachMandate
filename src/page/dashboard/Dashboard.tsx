import { useState } from "react";
import {
  Container,
  Button,
  FormGroup,
  Grid,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import Analysis from "../../components/Analysis";
import MandateSearch from "../../components/MandateSearch";
import SearchIcon from '@mui/icons-material/Search';
import { Year } from "../../utils/types";

const btnStyle = {
  fontSize: "10px",
  px: 1,
  py: "2px",
  outline: "none",
  height: "0",
};

const bigBtnStyle = {
  width: "35%",
  fontSize: "12px",
  textAlign: "center",
  backgroundColor: "rgb(205, 205, 205)",
  color: "black",
  marginRight: "5px",
  border: "none",
  py: "3px",
  fontWeight: 600,
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



function Dashboard() {
  const [bankValue, setBankValue] = useState<Bank | null>();

  const [yearValue, setYearValue] = useState <Year | null>();

  const [tab, setTab] = useState<string>("Analysis");

  function handleClickOnTabBtn(tabName: string) {
    setTab(tabName);
  }

  return (
    <Container sx={{paddingTop: 1, maxWidth: '100% !important'}}>
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
      <Grid container>
        <Stack width="100%" direction="row">
          <Button
            sx={bigBtnStyle}
            className={tab === "Analysis" ? "activeBtn" : ""}
            onClick={() => {
              handleClickOnTabBtn("Analysis");
            }}
          >
            ANALYSIS
          </Button>

          <Button
            sx={bigBtnStyle}
            className={tab === "Mandate Search" ? "activeBtn" : ""}
            onClick={() => {
              handleClickOnTabBtn("Mandate Search");
            }}
          >
            MANDATE SEARCH
          </Button>
        </Stack>
      </Grid>

      <Grid
        container
        sx={{
          width: "100%",
          minHeight: "450px",
          border: "0.1px solid lightgray",
          padding: 1,
          gap: 2,
          margin: 0,
        }}
      >
        {tab === "Analysis" ? <Analysis /> : <MandateSearch />}
      </Grid>
    </Container>
  );
}

export default Dashboard;
