import {FormGroup, FormControl, InputLabel, Select, MenuItem, Typography, Grid, Card, Stack, Box, Autocomplete, TextField } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { useState } from 'react';


  
  const selectStyle={
    fontSize: '10px',
    height: 25,
  }
  
  const CardStyle={
    width: 180,
    height: 55, 
    fontSize: '10px', 
    backgroundColor: 'rgb(63, 106, 216)', 
    color: 'white', 
    px: 0.5, 
    py: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    position: 'relative'
  }
  const LaunchIconBoxStyle={
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%',
    backgroundColor: 'rgba(189, 195, 199, 0.5)', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems:'center'
  }

  interface Month{
    id: string;
    name: string;
  }

  const months: Month[] =[
    {
      id: 'January',
      name: 'January'
    },
    {
      id: 'February',
      name: 'February'
    },
    {
      id: 'March',
      name: 'March'
    },
    {
      id: 'April',
      name: 'April'
    },
    {
      id: 'May',
      name: 'May'
    },
    {
      id: 'June',
      name: 'June'
    },
    {
      id: 'July',
      name: 'July'
    },
    {
      id: 'August',
      name: 'August'
    },
    {
      id: 'September',
      name: 'September'
    },
    {
      id: 'October',
      name: 'October'
    },
    {
      id: 'November',
      name: 'November'
    },
    {
      id: 'December',
      name: 'December'
    },
  ] 
  

function AnalysisTab() {

    // const monthsArr: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  

    const [monthValue, setMonthValue] = useState<Month | null>();


  return (
            <Box>
                <Grid sx={{width: '100%', border: '0.1px solid lightgray'}}>
                    
                    <Grid sx={{width: '100%', borderBottom: '0.1px solid lightgray'}}>
                      <Stack>
                        <Grid sx={{width: '100%'}}>
                          <Stack direction='row' sx={{width: '100%'}} display='flex' justifyContent='space-between' alignItems='center' paddingX={1}>
                            <Typography sx={{fontSize: '12px'}}>Total Mandates: -</Typography>
                            <FormGroup>
                              <Autocomplete
                                value={monthValue}
                                size="small"
                                getOptionLabel={(option) => option.name}
                                id="controllable-states-demo"
                                onChange={() => {}}
                                options={months}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Month" />}
                              />
                            </FormGroup>
                          </Stack>
                        </Grid> 
          
                      <Grid>
          
                      </Grid>
                      </Stack>
          
                    </Grid>
          
                    <Grid container sx={{width: '100%', px:1, py: 2}}>
                      <Stack direction='row' flexWrap='wrap' gap={0.5}>
          
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Unassigned In-process Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Physical In-process Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Unapproved Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Approved Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Sent To Bank</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>UMRN Pending</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Response Pending</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Pending for Data Entry</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Initial Reject Images</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Hard Reject Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>In-process E-Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>In-process Aadhaar Mandates</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                      </Stack>
          
                      <Grid sx={{width: '100%'}}>
                        <Grid sx={{width: '100%', my: 1, backgroundColor: 'rgb(210, 238, 255)'}}>
                          <Typography sx={{fontSize: '11px', color: 'gray'}}>Registered Mandate</Typography>
                        </Grid>
                        <Grid>
                          <Stack direction='row' flexWrap='wrap' gap={0.5}>
                            <Card sx={CardStyle}>
                              <Typography variant='body1' fontSize='10px'>-</Typography>
                              <Typography variant='body1' fontSize='10px'>Registered Physical Mandate</Typography>
                              <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                                <LaunchIcon />
                              </Box>
                            </Card>
                            <Card sx={CardStyle}>
                              <Typography variant='body1' fontSize='10px'>-</Typography>
                              <Typography variant='body1' fontSize='10px'>Registered E-Mandate</Typography>
                              <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                                <LaunchIcon />
                              </Box>
                            </Card>
                            <Card sx={CardStyle}>
                              <Typography variant='body1' fontSize='10px'>-</Typography>
                              <Typography variant='body1' fontSize='10px'>Registered Aadhaar Mandate</Typography>
                              <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                                <LaunchIcon />
                              </Box>
                            </Card>
                          </Stack>
                        </Grid>
                      </Grid>
          
                      <Grid sx={{width: '100%'}}>
                        <Grid sx={{width: '100%', my: 1, backgroundColor: 'rgb(210, 238, 255)'}}>
                          <Typography sx={{fontSize: '11px', color: 'gray'}}>Rejected Mandate</Typography>
                        </Grid>
                        <Grid>
                          <Stack direction='row' flexWrap='wrap' gap={0.5}>
                            <Card sx={CardStyle}>
                              <Typography variant='body1' fontSize='10px'>-</Typography>
                              <Typography variant='body1' fontSize='10px'>Rejected Physical Mandate</Typography>
                              <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                                <LaunchIcon />
                              </Box>
                            </Card>
                            <Card sx={CardStyle}>
                              <Typography variant='body1' fontSize='10px'>-</Typography>
                              <Typography variant='body1' fontSize='10px'>Rejected E-Mandate</Typography>
                              <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                                <LaunchIcon />
                              </Box>
                            </Card>
                            <Card sx={CardStyle}>
                              <Typography variant='body1' fontSize='10px'>-</Typography>
                              <Typography variant='body1' fontSize='10px'>Rejected Aadhaar Mandate</Typography>
                              <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                                <LaunchIcon />
                              </Box>
                            </Card>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
          
                  </Grid>
          
                  <Grid  sx={{width: '100%', border: '0.1px solid lightgray'}}>
          
                    <Grid  sx={{width: '100%', borderBottom: '0.1px solid lightgray'}}>
                        <Stack>
                          <Grid sx={{width: '100%'}}>
                            <Stack direction='row' sx={{width: '100%'}} display='flex' justifyContent='space-between' alignItems='center' paddingX={1}>
                              <Typography sx={{fontSize: '12px'}}>Total Presentations: -</Typography>
                              <FormGroup>
                                <Autocomplete
                                  value={monthValue}
                                  size="small"
                                  getOptionLabel={(option) => option.name}
                                  id="controllable-states-demo"
                                  onChange={() => {}}
                                  options={months}
                                  sx={{ width: 300 }}
                                  renderInput={(params) => <TextField {...params} label="Month" />}
                                />
                              </FormGroup>
                            </Stack>
                          </Grid> 
                        </Stack>
          
                    </Grid>
                    
                    <Grid container sx={{width: '100%', px:1, py:2}}>
                      <Stack direction='row' flexWrap='wrap' gap={0.5}>
          
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Scheduled For Batch</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Under Process</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Partial Status Received</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Completed</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        <Card sx={CardStyle}>
                          <Typography variant='body1' fontSize='10px'>-</Typography>
                          <Typography variant='body1' fontSize='10px'>Cancelled</Typography>
                          <Box component='div' className='activeLink' sx={LaunchIconBoxStyle}>
                            <LaunchIcon />
                          </Box>
                        </Card>
                        
                      </Stack>
          
                    </Grid>
          
                  </Grid>
    </Box>
  )
}

export default AnalysisTab