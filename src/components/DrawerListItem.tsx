import { ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




interface DrawerListItemProps {
  open: boolean;
  linksObj: any;
  showSubLinks: string;
  handleClickOnLinks: any;
  sublinkBg: string;
  setSubLinkBg: any;
}

function DrawerListItem  (props: DrawerListItemProps) {
  const { open, linksObj, showSubLinks, handleClickOnLinks, sublinkBg, setSubLinkBg } = props

  const navigate = useNavigate();


  function handleClickOnSubLink(link:string, sublink:string){
    let linkName = link.split(' ').join('');
    let sublinkName = sublink.split(' ').join('');

    if(link === 'DashBoard' || sublink === 'DashBoard' ){
      navigate('');
      setSubLinkBg(sublinkName);
    }else{
      navigate(`/${linkName}/${sublinkName}`);
      setSubLinkBg(sublinkName);
    }    
  }

  useEffect(()=>{
    handleClickOnSubLink('DashBoard', 'DahsBoard');
  }, [])



  const fontStyleOfLinks = {
    fontSize: 11,
    color: 'black',
    fontWeight: 600
  }
  const fontStyleOfSubLinks = {
    fontSize: 10,
    // color: 'gray',
    fontWeight: 600
  }


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <ListItem key={linksObj.link} disablePadding sx={{ height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ListItemButton
          sx={{
            justifyContent: open ? 'initial' : 'center',
            ":hover":{backgroundColor: !open? (showSubLinks===linksObj.link? 'rgb(210, 238, 255)': 'transparent') :('transparent')},
            px: 2.5,
            py: 0.5,
          }}

          onClick={() => { handleClickOnLinks(linksObj.link) }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 1 : 'auto',
              justifyContent: 'center',
            }}
          >
            <MailIcon />
          </ListItemIcon>


          <ListItemText primary={linksObj.link} sx={{ opacity: open ? 1 : 0, }} primaryTypographyProps={{ style: fontStyleOfLinks }} />

        </ListItemButton>
      </ListItem>
      {
        showSubLinks === linksObj.link ?

          (open ?
            (
              linksObj.sublinks.map((sublink: any, index: number) => (
                <Box key={index} sx={{ height: 25, width: '100%' }}>
                  {/* style={{margin: '0 0 0 30px', borderLeft: '2px solid rgb(210, 238, 255)'}} */}

                  <ListItem key={sublink} style={{ height: '100%', width: '100%', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ListItemButton
                      sx={{
                        width: "100%",
                        height: '100%',
                        borderRadius: '5px',
                        backgroundColor: sublinkBg === sublink ? 'rgb(210, 238, 255)' : 'transparent',
                        justifyContent: open ? 'initial' : 'center',
                        ml: 5,
                        px: 0,
                        py: 0,
                        ":hover": { backgroundColor: 'rgb(210, 238, 255)' }
                      }}
                      onClick={()=>{handleClickOnSubLink(linksObj.link , sublink)}}
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

                      <ListItemText
                        primary={sublink}
                        sx={{
                          opacity: open ? 1 : 0,
                        }}
                        primaryTypographyProps={{ style: fontStyleOfSubLinks }} />
                    </ListItemButton>
                  </ListItem>
                </Box>
              ))

            ):null
          ) : null
      }

    </Box>
  )
}

export default DrawerListItem