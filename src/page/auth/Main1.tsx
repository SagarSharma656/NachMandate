// import React, { useState } from 'react'
import Dashboard from '../dashboard/Dashboard'


import { Routes, Route, NavLink } from 'react-router-dom'


import AllUsers from '../user/AllUsers'

import NACHMandate from '../mandates/NACHMandate'
import UnAssignedMandates from '../mandates/UnAssignedMandates'

import InProcessPhysicalMandates from '../physicalMandates/InProcessPhysicalMandates'
import PendingForBatchCreation from '../physicalMandates/PendingForBatchCreation'
import UnapprovedMandates from '../physicalMandates/unapprovedmandates/UnapprovedMandates'
import ApprovedMandates from '../physicalMandates/approvedmandates/ApprovedMandates'
import PhysicalBatches from '../physicalMandates/physicalbatchs/PhysicalBatches'
import SentToBank from '../physicalMandates/senttobank/SentToBank'
import UMRNReceivedPhysical from '../physicalMandates/UMRNReceivedPhysical'
import RegisteredPhysicalMandates from '../physicalMandates/RegisteredPhysicalMandates'
import RejectedPhysicalMandates from '../physicalMandates/RejectedPhysicalMandates'
import ChangeRequestedMandates from '../physicalMandates/ChangeRequestedMandates'
import HardRejectedMandates from '../physicalMandates/HardRejectedMandates'
import ReInitiatedMandateReport from '../physicalMandates/ReInitiatedMandateReport'

import InProcessEMandates from '../eMandates/InProcessEMandates'
import RegisteredEMandates from '../eMandates/RegisteredEMandates'
import RejectedEMandates from '../eMandates/RejectedEMandates'

import InProcessAadhaarMandates from '../aadhaarMandates/InProcessAadhaarMandates'
import AadhaarBatchCreation from '../aadhaarMandates/AadhaarBatchCreation'
import ESignedMandates from '../aadhaarMandates/ESignedMandates'
import AadhaarBatches from '../aadhaarMandates/AadhaarBatches'
import SentToBankAadhaar from '../aadhaarMandates/SentToBankAadhaar'
import UMRNReceivedAadhaar from '../aadhaarMandates/UMRNReceivedAadhaar'
import RegisteredAadhaarMandates from '../aadhaarMandates/RegisteredAadhaarMandates'
import RejectedAadhaarMandates from '../aadhaarMandates/RejectedAadhaarMandates'

import PhysicalMandateAnalysis from '../mandateAnalysis/PhysicalMandateAnalysis'
import EMandateAnalysis from '../mandateAnalysis/EMandateAnalysis'
import AadhaarMandateAnalysis from '../mandateAnalysis/AadhaarMandateAnalysis'

import RegisteredUMRN from '../allUMRN/RegisteredUMRN'
import RejectedUMRN from '../allUMRN/RejectedUMRN'
import OnHoldUMRN from '../allUMRN/OnHoldUMRN'
import ExpiredUMRN from '../allUMRN/ExpiredUMRN'
import UMRNHistory from '../allUMRN/UMRNHistory'
import NPCICancelledUMRN from '../allUMRN/NPCICancelledUMRN'

import BulkPhysicalMandates from '../bulkMandates/BulkPhysicalMandates'
import BulkEMandates from '../bulkMandates/BulkEMandates'
import BulkAadharMandates from '../bulkMandates/BulkAadharMandates'
import LegacyUMRNUpload from '../bulkMandates/LegacyUMRNUpload'
import BulkPhysicalMandate from '../bulkMandates/BulkPhysicalMandate'

import AllDebitPresentations from '../debitPresentations/AllDebitPresentations'
import UnapprovedPresentations from '../debitPresentations/UnapprovedPresentations'
import ApprovedPresentations from '../debitPresentations/ApprovedPresentations'
import CreatedPresentmentBatches from '../debitPresentations/CreatedPresentmentBatches'

import ScheduledForBatchPresentations from '../scheduledPresentations/ScheduledForBatchPresentations'
import UnderProcessPresentations from '../scheduledPresentations/Under_Process_Presentations'
import CancelledByUserPresentations from '../scheduledPresentations/CancelledByUserPresentations'
import PartialStatusReceivedPresentations from '../scheduledPresentations/PartialStatusReceivedPresentations'
import CompletedPresentations from '../scheduledPresentations/CompletedPresentations'

import InitialRejectedImages from '../dataEntryOperations/InitialRejectedImages'
import NACHDataEntry from '../dataEntryOperations/NACHDataEntry'

import ConsolidatedReport from '../report/ConsolidatedReport'
import BillingReport from '../report/BillingReport'

import ProcessManual from '../trainingMaterial/ProcessManual'
import DemoVideos from '../trainingMaterial/DemoVideos'

import IFSCUpdate from '../others/IFSCUpdate'

import PendingUMRNAndResponse from '../pendingUMRNAndResponse/PendingUMRNAndResponse'

import UPIVerification from '../upiMandate/UPIVerification'
import UPIMandate from '../upiMandate/UPIMandate'
import UPIRegisteredMandate from '../upiMandate/UPIRegisteredMandate'
import UPIRejectedMandate from '../upiMandate/UPIRejectedMandate'
import UPIMandateAnalysis from '../upiMandate/UPIMandateAnalysis'

import UPIPresentation from '../upiPresentation/UPIPresentation'
import UPIUnapprovedPresentation from '../upiPresentation/UPIUnapprovedPresentation'
import UPIPendingForExecution from '../upiPresentation/UPIPendingForExecution'

import UPIBulkMandateCreation from '../upiBulk/UPIBulkMandateCreation'
import BulkUPIVerification from '../upiBulk/BulkUPIVerification'

import MainScreen from '../../components/MainScreen'

import { useState } from 'react'



// function Main() {
  
//   const [showNavBar, setShowNavBar] = useState(false);
  

//   return (
//     <div id={style.wrapper}>
        
//         <Header setShowNavBar={setShowNavBar}/>

//         <div id={style.content}>
          
//             <NavigationBar showNavBar={showNavBar} setShowNavBar={setShowNavBar}/>
            

//             <Routes>
//               <Route path='/' element={<MainScreen/>}>
//                 <Route index element={<Dashboard/>}/>

//                 <Route  path='/User/All_Users' element={<All_Users/>}/>
                
//                 <Route  path='/Mandates/NACH_Mandate' element={<NACH_Mandate/>}/>
//                 <Route  path='/Mandates/Un_Assigned_Mandates' element={<Un_Assigned_Mandates/>}/>
                              
//                 <Route  path='/Physical_Mandates/In_Process_Physical_Mandates' element={<In_Process_Physical_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/Pending_For_Batch_Creation' element={<Pending_For_Batch_Creation/>}/>
//                 <Route  path='/Physical_Mandates/Unapproved_Mandates' element={<Unapproved_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/Approved_Mandates' element={<Approved_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/Physical_Batches' element={<Physical_Batches/>}/>
//                 <Route  path='/Physical_Mandates/Sent_To_Bank' element={<Sent_To_Bank/>}/>
//                 <Route  path='/Physical_Mandates/UMRN_Received_Physical' element={<UMRN_Received_Physical/>}/>
//                 <Route  path='/Physical_Mandates/Registered_Physical_Mandates' element={<Registered_Physical_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/Rejected_Physical_Mandates' element={<Rejected_Physical_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/Change_Requested_Mandates' element={<Change_Requested_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/Hard_Rejected_Mandates' element={<Hard_Rejected_Mandates/>}/>
//                 <Route  path='/Physical_Mandates/ReInitiated_Mandate_Report' element={<ReInitiated_Mandate_Report/>}/>
                
//                 <Route  path='/E_Mandates/In_process_E_Mandates' element={<In_process_E_Mandates/>}/>
//                 <Route  path='/E_Mandates/Registered_E_Mandates' element={<Registered_E_Mandates/>}/>
//                 <Route  path='/E_Mandates/Rejected_E_Mandates' element={<Rejected_E_Mandates/>}/>

//                 <Route  path='/Aadhaar_Mandates/In_Process_Aadhaar_Mandates' element={<In_Process_Aadhaar_Mandates/>}/>
//                 <Route  path='/Aadhaar_Mandates/Aadhaar_Batch_Creation' element={<Aadhaar_Batch_Creation/>}/>
//                 <Route  path='/Aadhaar_Mandates/E_Signed_Mandates' element={<E_Signed_Mandates/>}/>
//                 <Route  path='/Aadhaar_Mandates/Aadhaar_Batches' element={<Aadhaar_Batches/>}/>
//                 <Route  path='/Aadhaar_Mandates/Sent_to_Bank_Aadhaar' element={<Sent_to_Bank_Aadhaar/>}/>
//                 <Route  path='/Aadhaar_Mandates/UMRN_Received_Aadhaar' element={<UMRN_Received_Aadhaar/>}/>
//                 <Route  path='/Aadhaar_Mandates/Registered_Aadhaar_Mandates' element={<Registered_Aadhaar_Mandates/>}/>
//                 <Route  path='/Aadhaar_Mandates/Rejected_Aadhaar_Mandates' element={<Rejected_Aadhaar_Mandates/>}/>

                
//                 <Route  path='/Mandate_Analysis/Physical_Mandate_Analysis' element={<Physical_Mandate_Analysis/>}/>
//                 <Route  path='/Mandate_Analysis/E_Mandate_Analysis' element={<E_Mandate_Analysis/>}/>
//                 <Route  path='/Mandate_Analysis/Aadhaar_Mandate_Analysis' element={<Aadhaar_Mandate_Analysis/>}/>

//                 <Route  path='/All_UMRN/Registered_UMRN' element={<Registered_UMRN/>}/>
//                 <Route  path='/All_UMRN/Rejected_UMRN' element={<Rejected_UMRN/>}/>
//                 <Route  path='/All_UMRN/On_Hold_UMRN' element={<On_Hold_UMRN/>}/>
//                 <Route  path='/All_UMRN/Expired_UMRN' element={<Expired_UMRN/>}/>
//                 <Route  path='/All_UMRN/UMRN_History' element={<UMRN_History/>}/>
//                 <Route  path='/All_UMRN/NPCI_Cancelled_UMRN' element={<NPCI_Cancelled_UMRN/>}/>

//                 <Route  path='/Bulk_Mandates/Bulk_Physical_Mandates' element={<Bulk_Physical_Mandates/>}/>
//                 <Route  path='/Bulk_Mandates/Bulk_E_Mandates' element={<Bulk_E_Mandates/>}/>
//                 <Route  path='/Bulk_Mandates/Bulk_Aadhar_Mandates' element={<Bulk_Aadhar_Mandates/>}/>
//                 <Route  path='/Bulk_Mandates/Legacy_UMRN_Upload' element={<Legacy_UMRN_Upload/>}/>
//                 <Route  path='/Bulk_Mandates/Bulk_Physical_Mandate' element={<Bulk_Physical_Mandate/>}/>

//                 <Route  path='/Debit_Presentations/All_Debit_Presentations' element={<All_Debit_Presentations/>}/>
//                 <Route  path='/Debit_Presentations/Unapproved_Presentations' element={<Unapproved_Presentations/>}/>
//                 <Route  path='/Debit_Presentations/Approved_Presentations' element={<Approved_Presentations/>}/>
//                 <Route  path='/Debit_Presentations/Created_Presentment_Batches' element={<Created_Presentment_Batches/>}/>

//                 <Route  path='/Scheduled_Presentations/Scheduled_For_Batch_Presentations' element={<Scheduled_For_Batch_Presentations/>}/>
//                 <Route  path='/Scheduled_Presentations/Under_Process_Presentations' element={<Under_Process_Presentations/>}/>
//                 <Route  path='/Scheduled_Presentations/Cancelled_By_User_Presentations' element={<Cancelled_By_User_Presentations/>}/>
//                 <Route  path='/Scheduled_Presentations/Partial_Status_Received_Presentations' element={<Partial_Status_Received_Presentations/>}/>
//                 <Route  path='/Scheduled_Presentations/Completed_Presentations' element={<Completed_Presentations/>}/>

//                 <Route  path='/Data_Entry_Operations/NACH_Data_Entry' element={<NACH_Data_Entry/>}/>
//                 <Route  path='/Data_Entry_Operations/Initial_Rejected_Images' element={<Initial_Rejected_Images/>}/>

//                 <Route  path='/Report/Consolidated_Report' element={<Consolidated_Report/>}/>
//                 <Route  path='/Report/Billing_Report' element={<Billing_Report/>}/>

//                 <Route  path='/Training_Material/Process_Manual' element={<Process_Manual/>}/>
//                 <Route  path='/Training_Material/Demo_Videos' element={<Demo_Videos/>}/>

//                 <Route  path='/Others/IFSC_Update' element={<IFSC_Update/>}/>

//                 <Route  path='/Pending_UMRN_And_Response/Pending_UMRN_and_Response' element={<Pending_UMRN_and_Response/>}/>

//                 <Route  path='/UPI_Mandate/UPI_Verification' element={<UPI_Verification/>}/>
//                 <Route  path='/UPI_Mandate/UPI_Mandate' element={<UPI_Mandate/>}/>
//                 <Route  path='/UPI_Mandate/UPI_Registered_Mandate' element={<UPI_Registered_Mandate/>}/>
//                 <Route  path='/UPI_Mandate/UPI_Rejected_Mandate' element={<UPI_Rejected_Mandate/>}/>
//                 <Route  path='/UPI_Mandate/UPI_Mandate_Analysis' element={<UPI_Mandate_Analysis/>}/>

//                 <Route  path='/UPI_Presentation/UPI_Presentation' element={<UPI_Presentation/>}/>
//                 <Route  path='/UPI_Presentation/UPI_Unapproved_Presentation' element={<UPI_Unapproved_Presentation/>}/>
//                 <Route  path='/UPI_Presentation/UPI_Pending_for_execution' element={<UPI_Pending_for_execution/>}/>

//                 <Route  path='/UPI_Bulk/UPI_Bulk_Mandate_Creation' element={<UPI_Bulk_Mandate_Creation/>}/>
//                 <Route  path='/UPI_Bulk/Bulk_UPI_Verification' element={<Bulk_UPI_Verification/>}/>
//               </Route>
//             </Routes>
//         </div>
//     </div>
//   )
// }

// export default Main


// abaaxxd



import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';


const drawerWidth = 240;



const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);







export default function Main1() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const [isExpant, setIsExpand]= useState(false);
  
  const[showSubLinks, setShowSubLinks] = useState('Dashboard');




  function handleClickOnLinks(linkName: string){
    if(showSubLinks === linkName){
      setShowSubLinks(null);
    }else{
      setShowSubLinks(linkName);
    }
  }


  function handleClickOnSubLinks(subLinkName: string){
;
  }

  const fontStyleOfLinks = {
    fontSize: 11,
    color: 'black',
    fontWeight: 600 
  }
  const fontStyleOfSubLinks ={
    fontSize: 10,
    // color: 'gray',
    fontWeight: 600
  }


  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{minHeight: 35, background: 'rgb(58, 196, 125)'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />   
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            
            Header

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{minHeight: 36}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />



        <List>




            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Dashboard' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Dashboard')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Dashboard'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Dashboard'?
                
                    ( open ?
                        (
                          ['Dashboard'].map((text)=>(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to="/" style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(210, 238, 255)'}
                                    }}
                                  >
                                    <ListItemText 
                                      primary={text} 
                                      sx={{ 
                                        opacity: open ? 1 : 0,  
                                      }} 
                                      primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          ))
                        ):null  
                    ):null
              }
                
            </Box>

            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='User' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('User')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='User'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'User'?
                
                    ( open ?
                        (
                          ['All Users'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/User/${linkText}`} onClick={()=>{handleClickOnSubLinks(`/User/${linkText}`)}} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Mandates' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Mandates')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Mandates'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Mandates'?
                
                    ( open ?
                        (
                          ['NACH Mandate', 'Un Assigned Mandates'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/Mandates/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Physical Mandates' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Physical Mandates')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Physical Mandates'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Physical Mandates'?
                
                    ( open ?
                        (
                          ['In Process Physical Mandates',
                            'Pending For Batch Creation',
                            'Unapproved Mandates',
                            'Approved Mandates',
                            'Physical Batches',
                            'Sent To Bank',
                            'UMRN Received Physical',
                            'Registered Physical Mandates',
                            'Rejected Physical Mandates',
                            'Change Requested Mandates',
                            'Hard Rejected Mandates',
                            'ReInitiated Mandate Report',].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/PhysicalMandates/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width:'100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='E-Mandates' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('E-Mandates')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='E-Mandates'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'E-Mandates'?
                
                    ( open ?
                        (
                          ['In Process E Mandates',
                            'Registered E Mandates',
                            'Rejected E Mandates'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/EMandates/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Aadhaar Mandates' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Aadhaar Mandates')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Aadhaar Mandates'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Aadhaar Mandates'?
                
                    ( open ?
                        (
                          ['In Process Aadhaar Mandates',
                            'Aadhaar Batch Creation',
                            'E Signed Mandates',
                            'Aadhaar Batches',
                            'Sent To Bank Aadhaar',
                            'UMRN Received Aadhaar',
                            'Registered Aadhaar Mandates',
                            'Rejected Aadhaar Mandates'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/AadhaarMandates/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Mandate Analysis' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Mandate Analysis')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Mandate Analysis'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Mandate Analysis'?
                
                    ( open ?
                        (
                          ['Physical Mandate Analysis',
                            'E Mandate Analysis',
                            'Aadhaar Mandate Analysis'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/MandateAnalysis/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='All UMRN' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('All UMRN')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='All UMRN'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'All UMRN'?
                
                    ( open ?
                        (
                          ['Registered UMRN',
                            'Rejected UMRN',
                            'On Hold UMRN',
                            'Expired UMRN',
                            'UMRN History',
                            'NPCI Cancelled UMRN'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/AllUMRN/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width:'100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Bulk Mandates' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Bulk Mandates')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Bulk Mandates'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Bulk Mandates'?
                
                    ( open ?
                        (
                          ['Bulk Physical Mandates',
                            'Bulk E Mandates',
                            'Bulk Aadhar Mandates',
                            'Legacy UMRN Upload',
                            'Bulk Physical Mandate'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/BulkMandates/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding:0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Debit Presentations' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Debit Presentations')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Debit Presentations'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Debit Presentations'?
                
                    ( open ?
                        (
                          ['All Debit Presentations',
                            'Unapproved Presentations',
                            'Approved Presentations',
                            'Created Presentment Batches'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/DebitPresentations/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Scheduled Presentations' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Scheduled Presentations')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Scheduled Presentations'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Scheduled Presentations'?
                
                    ( open ?
                        (
                          ['Scheduled For Batch Presentations',
                            'Under Process Presentations',
                            'Cancelled By User Presentations',
                            'Partial Status Received Presentations',
                            'Completed Presentations'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/ScheduledPresentations/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Data Entry Operations' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Data Entry Operations')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Data Entry Operations'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Data Entry Operations'?
                
                    ( open ?
                        (
                          ['NACH Data Entry',
                            'Initial Rejected Images'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/DataEntryOperations/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding:0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Report' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Report')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Report'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Report'?
                
                    ( open ?
                        (
                          ['Consolidated Report',
                            'Billing Report'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/Report/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 30, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Training Material' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Training Material')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Training Material'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Training Material'?
                
                    ( open ?
                        (
                          ['Process Manual',
                            'Demo Videos'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/TrainingMaterial/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Others' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Others')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Others'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Others'?
                
                    ( open ?
                        (
                          ['IFSC Update'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/Others/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text}  style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='Pending UMRN & Response' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('Pending UMRN & Response')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='Pending UMRN & Response'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'Pending UMRN & Response'?
                
                    ( open ?
                        (
                          ['Pending UMRN And Response'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/PendingUMRNAndResponse/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='UPI Mandate' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('UPI Mandate')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='UPI Mandate'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'UPI Mandate'?
                
                    ( open ?
                        (
                          ['UPI Verification',
                            'UPI Mandate',
                            'UPI Registered Mandate',
                            'UPI Rejected Mandate',
                            'UPI Mandate Analysis'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/UPIMandate/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text}  style={{height: 30, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='UPI Presentation' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('UPI Presentation')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='UPI Presentation'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'UPI Presentation'?
                
                    ( open ?
                        (
                          ['UPI Presentation',
                            'UPI Unapproved Presentation',
                            'UPI Pending for execution'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/UPIPresentation/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding:0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>


            <Box  sx={{ display: 'flex', flexDirection:'column',  alignItems: 'start'}}>
              <ListItem   key='UPI Bulk' disablePadding sx={{  height: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    py: 0.5,
                  }}

                  onClick={()=>{handleClickOnLinks('UPI Bulk')}}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  
                  
                  <ListItemText primary='UPI Bulk'  sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }}/> 

                </ListItemButton>
              </ListItem>
              {
                isExpant || showSubLinks === 'UPI Bulk'?
                
                    ( open ?
                        (
                          ['UPI Bulk Mandate Creation',
                            'Bulk UPI Verification'].map((text)=>{
                            let linkText = text.split(" ").join("");
                            return(
                            <Box sx={{width: '78%'}} style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}}>
                              <NavLink to={`/UPIBulk/${linkText}`} style={{width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'gray', margin: '0 0 0 20px',borderRadius: '5px'}}>

                                <ListItem key={text} style={{height: 25, width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                  <ListItemButton
                                    sx={{
                                      width: "100%",
                                      height: '100%',
                                      borderRadius: '5px',
                                      justifyContent: open ? 'initial' : 'center',
                                      px: 1.5,
                                      py: 0,
                                      ":hover":{backgroundColor:'rgb(218, 240, 254)', color: 'rgb(63, 106, 216)'}
                                    }}
                                  >
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} primaryTypographyProps={{ style: fontStyleOfSubLinks }}/>
                                  </ListItemButton>
                                </ListItem>
                              </NavLink>
                            </Box>
                          )
                          })
                        ):null  
                    ):null
              }
                
            </Box>

        </List>                     

      {/*
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> 
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1}}>
        <DrawerHeader style={{minHeight: 36}}/>
        <Typography>
            <Routes>
              <Route path='/' element={<MainScreen/>}>
                <Route index element={<Dashboard/>}/>

                <Route  path='/User/AllUsers' element={<AllUsers/>}/>                
                <Route  path='/Mandates/NACHMandate' element={<NACHMandate/>}/>
                <Route  path='/Mandates/UnAssignedMandates' element={<UnAssignedMandates/>}/>
                              
                <Route  path='/PhysicalMandates/InProcessPhysicalMandates' element={<InProcessPhysicalMandates/>}/>
                <Route  path='/PhysicalMandates/PendingForBatchCreation' element={<PendingForBatchCreation/>}/>
                <Route  path='/PhysicalMandates/UnapprovedMandates' element={<UnapprovedMandates/>}/>
                <Route  path='/PhysicalMandates/ApprovedMandates' element={<ApprovedMandates/>}/>
                <Route  path='/PhysicalMandates/PhysicalBatches' element={<PhysicalBatches/>}/>
                <Route  path='/PhysicalMandates/SentToBank' element={<SentToBank/>}/>
                <Route  path='/PhysicalMandates/UMRNReceivedPhysical' element={<UMRNReceivedPhysical/>}/>
                <Route  path='/PhysicalMandates/RegisteredPhysicalMandates' element={<RegisteredPhysicalMandates/>}/>
                <Route  path='/PhysicalMandates/RejectedPhysicalMandates' element={<RejectedPhysicalMandates/>}/>
                <Route  path='/PhysicalMandates/ChangeRequestedMandates' element={<ChangeRequestedMandates/>}/>
                <Route  path='/PhysicalMandates/HardRejectedMandates' element={<HardRejectedMandates/>}/>
                <Route  path='/PhysicalMandates/ReInitiatedMandateReport' element={<ReInitiatedMandateReport/>}/>
                
                <Route  path='/EMandates/InProcessEMandates' element={<InProcessEMandates/>}/>
                <Route  path='/EMandates/RegisteredEMandates' element={<RegisteredEMandates/>}/>
                <Route  path='/EMandates/RejectedEMandates' element={<RejectedEMandates/>}/>

                <Route  path='/AadhaarMandates/InProcessAadhaarMandates' element={<InProcessAadhaarMandates/>}/>
                <Route  path='/AadhaarMandates/AadhaarBatchCreation' element={<AadhaarBatchCreation/>}/>
                <Route  path='/AadhaarMandates/ESignedMandates' element={<ESignedMandates/>}/>
                <Route  path='/AadhaarMandates/AadhaarBatches' element={<AadhaarBatches/>}/>
                <Route  path='/AadhaarMandates/SentToBankAadhaar' element={<SentToBankAadhaar/>}/>
                <Route  path='/AadhaarMandates/UMRNReceivedAadhaar' element={<UMRNReceivedAadhaar/>}/>
                <Route  path='/AadhaarMandates/RegisteredAadhaarMandates' element={<RegisteredAadhaarMandates/>}/>
                <Route  path='/AadhaarMandates/RejectedAadhaarMandates' element={<RejectedAadhaarMandates/>}/>

              
                <Route  path='/MandateAnalysis/PhysicalMandateAnalysis' element={<PhysicalMandateAnalysis/>}/>
                <Route  path='/MandateAnalysis/EMandateAnalysis' element={<EMandateAnalysis/>}/>
                <Route  path='/MandateAnalysis/AadhaarMandateAnalysis' element={<AadhaarMandateAnalysis/>}/>

                <Route  path='/AllUMRN/RegisteredUMRN' element={<RegisteredUMRN/>}/>
                <Route  path='/AllUMRN/RejectedUMRN' element={<RejectedUMRN/>}/>
                <Route  path='/AllUMRN/OnHoldUMRN' element={<OnHoldUMRN/>}/>
                <Route  path='/AllUMRN/ExpiredUMRN' element={<ExpiredUMRN/>}/>
                <Route  path='/AllUMRN/UMRNHistory' element={<UMRNHistory/>}/>
                <Route  path='/AllUMRN/NPCICancelledUMRN' element={<NPCICancelledUMRN/>}/>

                <Route  path='/BulkMandates/BulkPhysicalMandates' element={<BulkPhysicalMandates/>}/>
                <Route  path='/BulkMandates/BulkEMandates' element={<BulkEMandates/>}/>
                <Route  path='/BulkMandates/BulkAadharMandates' element={<BulkAadharMandates/>}/>
                <Route  path='/BulkMandates/LegacyUMRNUpload' element={<LegacyUMRNUpload/>}/>
                <Route  path='/BulkMandates/BulkPhysicalMandate' element={<BulkPhysicalMandate/>}/>

                <Route  path='/DebitPresentations/AllDebitPresentations' element={<AllDebitPresentations/>}/>
                <Route  path='/DebitPresentations/UnapprovedPresentations' element={<UnapprovedPresentations/>}/>
                <Route  path='/DebitPresentations/ApprovedPresentations' element={<ApprovedPresentations/>}/>
                <Route  path='/DebitPresentations/CreatedPresentmentBatches' element={<CreatedPresentmentBatches/>}/>

                <Route  path='/ScheduledPresentations/ScheduledForBatchPresentations' element={<ScheduledForBatchPresentations/>}/>
                <Route  path='/ScheduledPresentations/UnderProcessPresentations' element={<UnderProcessPresentations/>}/>
                <Route  path='/ScheduledPresentations/CancelledByUserPresentations' element={<CancelledByUserPresentations/>}/>
                <Route  path='/ScheduledPresentations/PartialStatusReceivedPresentations' element={<PartialStatusReceivedPresentations/>}/>
                <Route  path='/ScheduledPresentations/CompletedPresentations' element={<CompletedPresentations/>}/>

                <Route  path='/DataEntryOperations/NACHDataEntry' element={<NACHDataEntry/>}/>
                <Route  path='/DataEntryOperations/InitialRejectedImages' element={<InitialRejectedImages/>}/>

                <Route  path='/Report/ConsolidatedReport' element={<ConsolidatedReport/>}/>
                <Route  path='/Report/BillingReport' element={<BillingReport/>}/>

                <Route  path='/TrainingMaterial/ProcessManual' element={<ProcessManual/>}/>
                <Route  path='/TrainingMaterial/DemoVideos' element={<DemoVideos/>}/>

                <Route  path='/Others/IFSCUpdate' element={<IFSCUpdate/>}/>

                <Route  path='/PendingUMRNAndResponse/PendingUMRNAndResponse' element={<PendingUMRNAndResponse/>}/>

                <Route  path='/UPIMandate/UPIVerification' element={<UPIVerification/>}/>
                <Route  path='/UPIMandate/UPIMandate' element={<UPIMandate/>}/>
                <Route  path='/UPIMandate/UPIRegisteredMandate' element={<UPIRegisteredMandate/>}/>
                <Route  path='/UPIMandate/UPIRejectedMandate' element={<UPIRejectedMandate/>}/>
                <Route  path='/UPIMandate/UPIMandateAnalysis' element={<UPIMandateAnalysis/>}/>

                <Route  path='/UPIPresentation/UPIPresentation' element={<UPIPresentation/>}/>
                <Route  path='/UPIPresentation/UPIUnapprovedPresentation' element={<UPIUnapprovedPresentation/>}/>
                <Route  path='/UPIPresentation/UPIPendingForExecution' element={<UPIPendingForExecution/>}/>

                <Route  path='/UPIBulk/UPIBulkMandateCreation' element={<UPIBulkMandateCreation/>}/>
                <Route  path='/UPIBulk/BulkUPIVerification' element={<BulkUPIVerification/>}/>
              </Route>
            </Routes>

        </Typography>
      </Box>
    </Box>
  );
}
