import  {Dispatch, SetStateAction} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerListItem from '../../components/DrawerListItem';
import { useState } from 'react';
import { Box } from '@mui/material';
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
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

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));



interface LeftDrawerProps{
    open: boolean; 
    setOpen: Dispatch<SetStateAction<boolean>>;
}
const LeftDrawer = (props:LeftDrawerProps) => {

    const linksNameArr = [{link: 'DashBoard', sublinks : ['DashBoard']},
                          {link: 'User', sublinks: ['All Users']},
                          {link: 'Mandates', sublinks: ['NACH Mandate', 'Un Assigned Mandates']},      
                          {link: 'Physical Mandates', sublinks: ['In Process Physical Mandates','Pending For Batch Creation','Unapproved Mandates','Approved Mandates','Physical Batches','Sent To Bank','UMRN Received Physical', 'Registered Physical Mandates','Rejected Physical Mandates','Change Requested Mandates','Hard Rejected Mandates','ReInitiated Mandate Report',]},
                          {link: 'E Mandates', sublinks: ['In Process E Mandates','Registered E Mandates','Rejected E Mandates']},
                          {link: 'Aadhaar Mandates', sublinks: ['In Process Aadhaar Mandates','Aadhaar Batch Creation','E Signed Mandates','Aadhaar Batches','Sent To Bank Aadhaar','UMRN Received Aadhaar','Registered Aadhaar Mandates','Rejected Aadhaar Mandates']},
                          {link: 'Mandate Analysis', sublinks: ['Physical Mandate Analysis','E Mandate Analysis','Aadhaar Mandate Analysis']},
                          {link: 'All UMRN', sublinks: ['Registered UMRN','Rejected UMRN','On Hold UMRN','Expired UMRN','UMRN History','NPCI Cancelled UMRN']},
                          {link: 'Bulk Mandates', sublinks: ['Bulk Physical Mandates','Bulk E Mandates','Bulk Aadhar Mandates','Legacy UMRN Upload','Bulk Physical Mandate']},
                          {link: 'Debit Presentations', sublinks: ['All Debit Presentations','Unapproved Presentations','Approved Presentations','Created Presentment Batches']},
                          {link: 'Scheduled Presentations', sublinks: ['Scheduled For Batch Presentations','Under Process Presentations','Cancelled By User Presentations','Partial Status Received Presentations','Completed Presentations']},
                          {link: 'Data Entry Operations', sublinks: ['NACH Data Entry','Initial Rejected Images']},
                          {link: 'Report', sublinks: ['Consolidated Report','Billing Report']},
                          {link: 'Training Material', sublinks: ['Process Manual','Demo Videos']},
                          {link: 'Others', sublinks: ['IFSC Update']},
                          {link: 'Pending UMRN & Response', sublinks: ['Pending UMRN And Response']},
                          {link: 'UPI Mandate', sublinks: ['UPI Verification','UPI Mandate','UPI Registered Mandate','UPI Rejected Mandate','UPI Mandate Analysis']},
                          {link: 'UPI Presentation', sublinks: ['UPI Presentation','UPI Unapproved Presentation','UPI Pending for execution']},
                          {link: 'UPI Bulk', sublinks: ['UPI Bulk Mandate Creation','Bulk UPI Verification']},
]

    const theme = useTheme();
    const {open, setOpen}=props
    const [showSubLinks, setShowSubLinks] = useState<string>('Dashboard');
    const [sublinkBg, setSubLinkBg] = useState<string>('Dashboard');


    const handleDrawerClose = () => {
        setOpen(false);
      };



    
    function handleClickOnLinks(linkName: string) {
        if (showSubLinks === linkName) {
            setShowSubLinks('');
        } else {
            setShowSubLinks(linkName);
            setOpen(true);
        }
    }
    
    return (
        <Box>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} sx={{":focus":{outline: 'none'}}}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{overflow:'scroll'}}>

                    {
                        linksNameArr.map((linksObj, index)=>(
                            <DrawerListItem key={index} linksObj={linksObj} open={open} showSubLinks={showSubLinks} handleClickOnLinks={handleClickOnLinks} sublinkBg={sublinkBg} setSubLinkBg={setSubLinkBg}/>
                        ))
                    }
                </List>    
            </Drawer>
        </Box>
    )
}

export default LeftDrawer