import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import LeftDrawer from "../navbar/LeftDrawer";
import Header from "../navbar/Header";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";

import AllUsers from "../user/AllUsers";

import NACHMandate from "../mandates/NACHMandate";
import UnAssignedMandates from "../mandates/UnAssignedMandates";

import InProcessPhysicalMandates from "../physicalMandates/InProcessPhysicalMandates";
import PendingForBatchCreation from "../physicalMandates/PendingForBatchCreation";
import UnapprovedMandates from "../physicalMandates/UnapprovedMandates";
import ApprovedMandates from "../physicalMandates/ApprovedMandates";
import PhysicalBatches from "../physicalMandates/PhysicalBatches";
import SentToBank from "../physicalMandates/SentToBank";
import UMRNReceivedPhysical from "../physicalMandates/UMRNReceivedPhysical";
import RegisteredPhysicalMandates from "../physicalMandates/RegisteredPhysicalMandates";
import RejectedPhysicalMandates from "../physicalMandates/RejectedPhysicalMandates";
import ChangeRequestedMandates from "../physicalMandates/ChangeRequestedMandates";
import HardRejectedMandates from "../physicalMandates/HardRejectedMandates";
import ReInitiatedMandateReport from "../physicalMandates/ReInitiatedMandateReport";

import InProcessEMandates from "../eMandates/InProcessEMandates";
import RegisteredEMandates from "../eMandates/RegisteredEMandates";
import RejectedEMandates from "../eMandates/RejectedEMandates";

import InProcessAadhaarMandates from "../aadhaarMandates/InProcessAadhaarMandates";
import AadhaarBatchCreation from "../aadhaarMandates/AadhaarBatchCreation";
import ESignedMandates from "../aadhaarMandates/ESignedMandates";
import AadhaarBatches from "../aadhaarMandates/AadhaarBatches";
import SentToBankAadhaar from "../aadhaarMandates/SentToBankAadhaar";
import UMRNReceivedAadhaar from "../aadhaarMandates/UMRNReceivedAadhaar";
import RegisteredAadhaarMandates from "../aadhaarMandates/RegisteredAadhaarMandates";
import RejectedAadhaarMandates from "../aadhaarMandates/RejectedAadhaarMandates";

import PhysicalMandateAnalysis from "../mandateAnalysis/PhysicalMandateAnalysis";
import EMandateAnalysis from "../mandateAnalysis/EMandateAnalysis";
import AadhaarMandateAnalysis from "../mandateAnalysis/AadhaarMandateAnalysis";

import RegisteredUMRN from "../allUMRN/RegisteredUMRN";
import RejectedUMRN from "../allUMRN/RejectedUMRN";
import OnHoldUMRN from "../allUMRN/OnHoldUMRN";
import ExpiredUMRN from "../allUMRN/ExpiredUMRN";
import UMRNHistory from "../allUMRN/UMRNHistory";
import NPCICancelledUMRN from "../allUMRN/NPCICancelledUMRN";

import BulkPhysicalMandates from "../bulkMandates/BulkPhysicalMandates";
import BulkEMandates from "../bulkMandates/BulkEMandates";
import BulkAadharMandates from "../bulkMandates/BulkAadharMandates";
import LegacyUMRNUpload from "../bulkMandates/LegacyUMRNUpload";
import BulkPhysicalMandate from "../bulkMandates/BulkPhysicalMandate";

import AllDebitPresentations from "../debitPresentations/AllDebitPresentations";
import UnapprovedPresentations from "../debitPresentations/UnapprovedPresentations";
import ApprovedPresentations from "../debitPresentations/ApprovedPresentations";
import CreatedPresentmentBatches from "../debitPresentations/CreatedPresentmentBatches";

import ScheduledForBatchPresentations from "../scheduledPresentations/ScheduledForBatchPresentations";
import UnderProcessPresentations from "../scheduledPresentations/Under_Process_Presentations";
import CancelledByUserPresentations from "../scheduledPresentations/CancelledByUserPresentations";
import PartialStatusReceivedPresentations from "../scheduledPresentations/PartialStatusReceivedPresentations";
import CompletedPresentations from "../scheduledPresentations/CompletedPresentations";

import InitialRejectedImages from "../dataEntryOperations/InitialRejectedImages";
import NACHDataEntry from "../dataEntryOperations/NACHDataEntry";

import ConsolidatedReport from "../report/ConsolidatedReport";
import BillingReport from "../report/BillingReport";

import ProcessManual from "../trainingMaterial/ProcessManual";
import DemoVideos from "../trainingMaterial/DemoVideos";

import IFSCUpdate from "../others/IFSCUpdate";

import PendingUMRNAndResponse from "../pendingUMRNAndResponse/PendingUMRNAndResponse";

import UPIVerification from "../upiMandate/UPIVerification";
import UPIMandate from "../upiMandate/UPIMandate";
import UPIRegisteredMandate from "../upiMandate/UPIRegisteredMandate";
import UPIRejectedMandate from "../upiMandate/UPIRejectedMandate";
import UPIMandateAnalysis from "../upiMandate/UPIMandateAnalysis";

import UPIPresentation from "../upiPresentation/UPIPresentation";
import UPIUnapprovedPresentation from "../upiPresentation/UPIUnapprovedPresentation";
import UPIPendingForExecution from "../upiPresentation/UPIPendingForExecution";

import UPIBulkMandateCreation from "../upiBulk/UPIBulkMandateCreation";
import BulkUPIVerification from "../upiBulk/BulkUPIVerification";
import { Typography } from "@mui/material";

// import MainScreen from '../../components/MainScreen'

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Header
          AppBar={AppBar}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />

        <LeftDrawer open={open} setOpen={setOpen} />

        <Box component="main" sx={{flexGrow: 1, padding: 0}}>
          <DrawerHeader/>
          <Box>
            <Routes>
              {/* <Route path='/' element={<MainScreen/>}> */}
              <Route path="" element={<Dashboard />} />

              <Route path="/User/AllUsers" element={<AllUsers />} />
              <Route path="/Mandates/NACHMandate" element={<NACHMandate />} />
              <Route
                path="/Mandates/UnAssignedMandates"
                element={<UnAssignedMandates />}
              />

              <Route
                path="/PhysicalMandates/InProcessPhysicalMandates"
                element={<InProcessPhysicalMandates />}
              />
              <Route
                path="/PhysicalMandates/PendingForBatchCreation"
                element={<PendingForBatchCreation />}
              />
              <Route
                path="/PhysicalMandates/UnapprovedMandates"
                element={<UnapprovedMandates />}
              />
              <Route
                path="/PhysicalMandates/ApprovedMandates"
                element={<ApprovedMandates />}
              />
              <Route
                path="/PhysicalMandates/PhysicalBatches"
                element={<PhysicalBatches />}
              />
              <Route
                path="/PhysicalMandates/SentToBank"
                element={<SentToBank />}
              />
              <Route
                path="/PhysicalMandates/UMRNReceivedPhysical"
                element={<UMRNReceivedPhysical />}
              />
              <Route
                path="/PhysicalMandates/RegisteredPhysicalMandates"
                element={<RegisteredPhysicalMandates />}
              />
              <Route
                path="/PhysicalMandates/RejectedPhysicalMandates"
                element={<RejectedPhysicalMandates />}
              />
              <Route
                path="/PhysicalMandates/ChangeRequestedMandates"
                element={<ChangeRequestedMandates />}
              />
              <Route
                path="/PhysicalMandates/HardRejectedMandates"
                element={<HardRejectedMandates />}
              />
              <Route
                path="/PhysicalMandates/ReInitiatedMandateReport"
                element={<ReInitiatedMandateReport />}
              />

              <Route
                path="/EMandates/InProcessEMandates"
                element={<InProcessEMandates />}
              />
              <Route
                path="/EMandates/RegisteredEMandates"
                element={<RegisteredEMandates />}
              />
              <Route
                path="/EMandates/RejectedEMandates"
                element={<RejectedEMandates />}
              />

              <Route
                path="/AadhaarMandates/InProcessAadhaarMandates"
                element={<InProcessAadhaarMandates />}
              />
              <Route
                path="/AadhaarMandates/AadhaarBatchCreation"
                element={<AadhaarBatchCreation />}
              />
              <Route
                path="/AadhaarMandates/ESignedMandates"
                element={<ESignedMandates />}
              />
              <Route
                path="/AadhaarMandates/AadhaarBatches"
                element={<AadhaarBatches />}
              />
              <Route
                path="/AadhaarMandates/SentToBankAadhaar"
                element={<SentToBankAadhaar />}
              />
              <Route
                path="/AadhaarMandates/UMRNReceivedAadhaar"
                element={<UMRNReceivedAadhaar />}
              />
              <Route
                path="/AadhaarMandates/RegisteredAadhaarMandates"
                element={<RegisteredAadhaarMandates />}
              />
              <Route
                path="/AadhaarMandates/RejectedAadhaarMandates"
                element={<RejectedAadhaarMandates />}
              />

              <Route
                path="/MandateAnalysis/PhysicalMandateAnalysis"
                element={<PhysicalMandateAnalysis />}
              />
              <Route
                path="/MandateAnalysis/EMandateAnalysis"
                element={<EMandateAnalysis />}
              />
              <Route
                path="/MandateAnalysis/AadhaarMandateAnalysis"
                element={<AadhaarMandateAnalysis />}
              />

              <Route
                path="/AllUMRN/RegisteredUMRN"
                element={<RegisteredUMRN />}
              />
              <Route path="/AllUMRN/RejectedUMRN" element={<RejectedUMRN />} />
              <Route path="/AllUMRN/OnHoldUMRN" element={<OnHoldUMRN />} />
              <Route path="/AllUMRN/ExpiredUMRN" element={<ExpiredUMRN />} />
              <Route path="/AllUMRN/UMRNHistory" element={<UMRNHistory />} />
              <Route
                path="/AllUMRN/NPCICancelledUMRN"
                element={<NPCICancelledUMRN />}
              />

              <Route
                path="/BulkMandates/BulkPhysicalMandates"
                element={<BulkPhysicalMandates />}
              />
              <Route
                path="/BulkMandates/BulkEMandates"
                element={<BulkEMandates />}
              />
              <Route
                path="/BulkMandates/BulkAadharMandates"
                element={<BulkAadharMandates />}
              />
              <Route
                path="/BulkMandates/LegacyUMRNUpload"
                element={<LegacyUMRNUpload />}
              />
              <Route
                path="/BulkMandates/BulkPhysicalMandate"
                element={<BulkPhysicalMandate />}
              />

              <Route
                path="/DebitPresentations/AllDebitPresentations"
                element={<AllDebitPresentations />}
              />
              <Route
                path="/DebitPresentations/UnapprovedPresentations"
                element={<UnapprovedPresentations />}
              />
              <Route
                path="/DebitPresentations/ApprovedPresentations"
                element={<ApprovedPresentations />}
              />
              <Route
                path="/DebitPresentations/CreatedPresentmentBatches"
                element={<CreatedPresentmentBatches />}
              />

              <Route
                path="/ScheduledPresentations/ScheduledForBatchPresentations"
                element={<ScheduledForBatchPresentations />}
              />
              <Route
                path="/ScheduledPresentations/UnderProcessPresentations"
                element={<UnderProcessPresentations />}
              />
              <Route
                path="/ScheduledPresentations/CancelledByUserPresentations"
                element={<CancelledByUserPresentations />}
              />
              <Route
                path="/ScheduledPresentations/PartialStatusReceivedPresentations"
                element={<PartialStatusReceivedPresentations />}
              />
              <Route
                path="/ScheduledPresentations/CompletedPresentations"
                element={<CompletedPresentations />}
              />

              <Route
                path="/DataEntryOperations/NACHDataEntry"
                element={<NACHDataEntry />}
              />
              <Route
                path="/DataEntryOperations/InitialRejectedImages"
                element={<InitialRejectedImages />}
              />

              <Route
                path="/Report/ConsolidatedReport"
                element={<ConsolidatedReport />}
              />
              <Route path="/Report/BillingReport" element={<BillingReport />} />

              <Route
                path="/TrainingMaterial/ProcessManual"
                element={<ProcessManual />}
              />
              <Route
                path="/TrainingMaterial/DemoVideos"
                element={<DemoVideos />}
              />

              <Route path="/Others/IFSCUpdate" element={<IFSCUpdate />} />

              <Route
                path="/PendingUMRNAndResponse/PendingUMRNAndResponse"
                element={<PendingUMRNAndResponse />}
              />

              <Route
                path="/UPIMandate/UPIVerification"
                element={<UPIVerification />}
              />
              <Route path="/UPIMandate/UPIMandate" element={<UPIMandate />} />
              <Route
                path="/UPIMandate/UPIRegisteredMandate"
                element={<UPIRegisteredMandate />}
              />
              <Route
                path="/UPIMandate/UPIRejectedMandate"
                element={<UPIRejectedMandate />}
              />
              <Route
                path="/UPIMandate/UPIMandateAnalysis"
                element={<UPIMandateAnalysis />}
              />

              <Route
                path="/UPIPresentation/UPIPresentation"
                element={<UPIPresentation />}
              />
              <Route
                path="/UPIPresentation/UPIUnapprovedPresentation"
                element={<UPIUnapprovedPresentation />}
              />
              <Route
                path="/UPIPresentation/UPIPendingForExecution"
                element={<UPIPendingForExecution />}
              />

              <Route
                path="/UPIBulk/UPIBulkMandateCreation"
                element={<UPIBulkMandateCreation />}
              />
              <Route
                path="/UPIBulk/BulkUPIVerification"
                element={<BulkUPIVerification />}
              />
              {/* </Route> */}
            </Routes>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
