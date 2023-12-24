import {
  FormGroup,
  Typography,
  Grid,
  Card,
  Stack,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState } from "react";
import { Month } from "../utils/types";

const selectStyle = {
  fontSize: "10px",
  height: 25,
};

const CardStyle = {
  width: 180,
  height: 55,
  fontSize: "10px",
  backgroundColor: "rgb(63, 106, 216)",
  color: "white",
  px: 0.5,
  py: 1,
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  position: "relative",
};
const LaunchIconBoxStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(189, 195, 199, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const months: Month[] = [
  {
    id: "January",
    name: "January",
  },
  {
    id: "February",
    name: "February",
  },
  {
    id: "March",
    name: "March",
  },
  {
    id: "April",
    name: "April",
  },
  {
    id: "May",
    name: "May",
  },
  {
    id: "June",
    name: "June",
  },
  {
    id: "July",
    name: "July",
  },
  {
    id: "August",
    name: "August",
  },
  {
    id: "September",
    name: "September",
  },
  {
    id: "October",
    name: "October",
  },
  {
    id: "November",
    name: "November",
  },
  {
    id: "December",
    name: "December",
  },
];

function AnalysisTab() {

  const [monthValue, setMonthValue] = useState<Month | null>();
  

  return (
    <Box>
      <Grid sx={{ border: "0.1px solid lightgray"}}>
        <Grid sx={{ borderBottom: "0.1px solid lightgray"}}>
          <Stack>
            <Grid sx={{background: ''}}>
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                paddingX={1}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  Total Mandates: -
                </Typography>
                <FormGroup>
                  <Autocomplete
                    value={monthValue}
                    size="small"
                    getOptionLabel={(option) => option.name}
                    id="controllable-states-demo"
                    onChange={() => {}}
                    options={months}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Month" />
                    )}
                  />
                </FormGroup>
              </Stack>
            </Grid>
            <Grid>
              
            </Grid>
          </Stack>
        </Grid>

        <Grid container sx={{ px: 1, py: 2 }}>
          <Stack>
            <Stack direction="row" flexWrap="wrap" gap={0.5}>
              <NavLink to="/EMandates/InProcessEMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Unassigned In-process Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>

              <NavLink to="/PhysicalMandates/InProcessPhysicalMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Physical In-process Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/PhysicalMandates/UnapprovedMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Unapproved Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/PhysicalMandates/ApprovedMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Approved Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/PhysicalMandates/SentToBank">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Sent To Bank
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    UMRN Pending
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/PhysicalMandates/UMRNReceivedPhysical">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Response Pending
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/DataEntryOperations/NACHDataEntry">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Pending for Data Entry
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/DataEntryOperations/InitialRejectedImages">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Initial Reject Images
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/PhysicalMandates/HardRejectedMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    Hard Reject Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/EMandates/InProcessEMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    In-process E-Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
              <NavLink to="/AadhaarMandates/InProcessAadhaarMandates">
                <Card sx={CardStyle}>
                  <Typography variant="body1" fontSize="10px">
                    -
                  </Typography>
                  <Typography variant="body1" fontSize="10px">
                    In-process Aadhaar Mandates
                  </Typography>
                  <Box
                    component="div"
                    className="activeLink"
                    sx={LaunchIconBoxStyle}
                  >
                    <LaunchIcon />
                  </Box>
                </Card>
              </NavLink>
            </Stack>

            <Grid>
              
              <Grid sx={{ my: 1, backgroundColor: "rgb(210, 238, 255)" }}>
                <Typography sx={{ fontSize: "11px", color: "gray" }}>
                  Registered Mandate
                </Typography>
              </Grid>
              <Grid>
                <Stack direction="row" flexWrap="wrap" gap={0.5}>
                  <NavLink to="/PhysicalMandates/RegisteredPhysicalMandates">
                    <Card sx={CardStyle}>
                      <Typography variant="body1" fontSize="10px">
                        -
                      </Typography>
                      <Typography variant="body1" fontSize="10px">
                        Registered Physical Mandate
                      </Typography>
                      <Box
                        component="div"
                        className="activeLink"
                        sx={LaunchIconBoxStyle}
                      >
                        <LaunchIcon />
                      </Box>
                    </Card>
                  </NavLink>
                  <NavLink to="/EMandates/RegisteredEMandates">
                    <Card sx={CardStyle}>
                      <Typography variant="body1" fontSize="10px">
                        -
                      </Typography>
                      <Typography variant="body1" fontSize="10px">
                        Registered E-Mandate
                      </Typography>
                      <Box
                        component="div"
                        className="activeLink"
                        sx={LaunchIconBoxStyle}
                      >
                        <LaunchIcon />
                      </Box>
                    </Card>
                  </NavLink>
                  <NavLink to="/AadhaarMandates/RegisteredAadhaarMandates">
                    <Card sx={CardStyle}>
                      <Typography variant="body1" fontSize="10px">
                        -
                      </Typography>
                      <Typography variant="body1" fontSize="10px">
                        Registered Aadhaar Mandate
                      </Typography>
                      <Box
                        component="div"
                        className="activeLink"
                        sx={LaunchIconBoxStyle}
                      >
                        <LaunchIcon />
                      </Box>
                    </Card>
                  </NavLink>
                </Stack>
              </Grid>
            </Grid>

            <Grid>
              <Grid sx={{ my: 1, backgroundColor: "rgb(210, 238, 255)" }}>
                <Typography sx={{ fontSize: "11px", color: "gray" }}>
                  Rejected Mandate
                </Typography>
              </Grid>
              <Grid>
                <Stack direction="row" flexWrap="wrap" gap={0.5}>
                  <NavLink to="/PhysicalMandates/RejectedPhysicalMandates">
                    <Card sx={CardStyle}>
                      <Typography variant="body1" fontSize="10px">
                        -
                      </Typography>
                      <Typography variant="body1" fontSize="10px">
                        Rejected Physical Mandate
                      </Typography>
                      <Box
                        component="div"
                        className="activeLink"
                        sx={LaunchIconBoxStyle}
                      >
                        <LaunchIcon />
                      </Box>
                    </Card>
                  </NavLink>
                  <NavLink to="/EMandates/RejectedEMandates">
                    <Card sx={CardStyle}>
                      <Typography variant="body1" fontSize="10px">
                        -
                      </Typography>
                      <Typography variant="body1" fontSize="10px">
                        Rejected E-Mandate
                      </Typography>
                      <Box
                        component="div"
                        className="activeLink"
                        sx={LaunchIconBoxStyle}
                      >
                        <LaunchIcon />
                      </Box>
                    </Card>
                  </NavLink>
                  <NavLink to="/AadhaarMandates/RegisteredAadhaarMandates">
                    <Card sx={CardStyle}>
                      <Typography variant="body1" fontSize="10px">
                        -
                      </Typography>
                      <Typography variant="body1" fontSize="10px">
                        Rejected Aadhaar Mandate
                      </Typography>
                      <Box
                        component="div"
                        className="activeLink"
                        sx={LaunchIconBoxStyle}
                      >
                        <LaunchIcon />
                      </Box>
                    </Card>
                  </NavLink>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>

      <Grid sx={{ border: "0.1px solid lightgray" }}>
        <Grid sx={{ borderBottom: "0.1px solid lightgray" }}>
          <Stack>
            <Grid>
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                paddingX={1}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  Total Presentations: -
                </Typography>
                <FormGroup>
                  <Autocomplete
                    value={monthValue}
                    size="small"
                    getOptionLabel={(option) => option.name}
                    id="controllable-states-demo"
                    onChange={() => {}}
                    options={months}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Month" />
                    )}
                  />
                </FormGroup>
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid container sx={{ px: 1, py: 2 }}>
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            <NavLink to="/ScheduledPresentations/ScheduledForBatchPresentations">
              <Card sx={CardStyle}>
                <Typography variant="body1" fontSize="10px">
                  -
                </Typography>
                <Typography variant="body1" fontSize="10px">
                  Scheduled For Batch
                </Typography>
                <Box
                  component="div"
                  className="activeLink"
                  sx={LaunchIconBoxStyle}
                >
                  <LaunchIcon />
                </Box>
              </Card>
            </NavLink>
            <NavLink to="/ScheduledPresentations/UnderProcessPresentations">
              <Card sx={CardStyle}>
                <Typography variant="body1" fontSize="10px">
                  -
                </Typography>
                <Typography variant="body1" fontSize="10px">
                  Under Process
                </Typography>
                <Box
                  component="div"
                  className="activeLink"
                  sx={LaunchIconBoxStyle}
                >
                  <LaunchIcon />
                </Box>
              </Card>
            </NavLink>
            <NavLink to="/ScheduledPresentations/PartialStatusReceivedPresentations">
              <Card sx={CardStyle}>
                <Typography variant="body1" fontSize="10px">
                  -
                </Typography>
                <Typography variant="body1" fontSize="10px">
                  Partial Status Received
                </Typography>
                <Box
                  component="div"
                  className="activeLink"
                  sx={LaunchIconBoxStyle}
                >
                  <LaunchIcon />
                </Box>
              </Card>
            </NavLink>
            <NavLink to="/ScheduledPresentations/CompletedPresentations">
              <Card sx={CardStyle}>
                <Typography variant="body1" fontSize="10px">
                  -
                </Typography>
                <Typography variant="body1" fontSize="10px">
                  Completed
                </Typography>
                <Box
                  component="div"
                  className="activeLink"
                  sx={LaunchIconBoxStyle}
                >
                  <LaunchIcon />
                </Box>
              </Card>
            </NavLink>
            <NavLink to="/ScheduledPresentations/CancelledByUserPresentations">
              <Card sx={CardStyle}>
                <Typography variant="body1" fontSize="10px">
                  -
                </Typography>
                <Typography variant="body1" fontSize="10px">
                  Cancelled
                </Typography>
                <Box
                  component="div"
                  className="activeLink"
                  sx={LaunchIconBoxStyle}
                >
                  <LaunchIcon />
                </Box>
              </Card>
            </NavLink>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AnalysisTab;
