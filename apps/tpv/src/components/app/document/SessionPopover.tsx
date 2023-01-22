import * as React from 'react';

import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Icon from '@mdi/react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { mdiCogOutline } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import { useSession } from '@/store/session/useSession';

const Arrow = styled('div')`
  top: -5px;
  right: 12px;
  position: absolute;
  width: 0;
  height: 0;
  content: '';
  box-sizing: border-box;
  border: 7px solid;
  border-color: transparent transparent #ffffff #ffffff;

  transform: rotate(-225deg);
  box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

export default function SessionPopover() {
  const {user = {name: "amirss"},logout } = useSession()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            overflowY: 'unset',
            overflowX: 'unset',
            borderRadius: 8,
          },
        },
      },
    },
  });
  function primeraLetra(letter:string) {
    if (!letter){
      return ""
    }
    return letter[0].toUpperCase() + letter.slice(1);
  }

  const closeSession = async ()=>{
    try {
     const create = await axios.post("/api/logout").then((res)=>res.data)
     logout()
     router.push("/")
  } catch(e:any){
    if (e.response){
      if (e.response.data){
        const data = e.response.data
        console.log(data.message)
        alert(data.message)
      }
    }
  }
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Avatar
                aria-describedby={id}
                alt="Remy Sharp"
                src={ user.picture ? user.picture : "/avatar.jpg"}
                {...bindTrigger(popupState)}
              />
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                style={{
                  top: 10,
                  marginRight: -20,
                }}
              >
                <Box
                  p={2}
                  style={{
                    padding: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: 250,
                  }}
                >
                  <List sx={{ width: '100%',  p: 0, bgcolor: 'background.paper' }}>
                  <ListItem>
                    <ListItemText primary={`Hello, Welcom`}
                    secondary={`${primeraLetra(user.name)}`} />
                  </ListItem>
                  </List>
                  <Divider />
                  <List>
                    <ListItemButton
                      sx={{
                        minHeight: 35,
                        height: '35px !important',
                        px: 2.5,
                        py: 2.5,
                        width: '100%',
                        borderRadius: 1.5,
                        marginLeft: 0,
                        paddingLeft: 0,
                        marginRight: 7,
                      }}
                      onClick={()=>{
                        router.push("/profile")
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          margin: 0,
                          mr: 0,
                          justifyContent: 'center',
                        }}
                      >
                        <IconButton size={'small'} color="inherit">
                          <Icon path={mdiCogOutline} size={1} />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={'Settings'}
                        sx={{ opacity: true ? 1 : 0 }}
                      />
                    </ListItemButton>
                    <ListItemButton
                      sx={{
                        minHeight: 35,
                        height: '35px !important',
                        px: 2.5,
                        py: 2.5,
                        width: '100%',
                        borderRadius: 1.5,
                        marginLeft: 0,
                        paddingLeft: 0,
                        marginRight: 7,
                      }}
                      onClick={()=>{closeSession()}}
                    >
                      <ListItemIcon
                        sx={{
                          margin: 0,
                          mr: 0,
                          justifyContent: 'center',
                        }}
                      >
                        <IconButton size={'small'} color="inherit">
                          <Icon path={mdiLogout} size={1} />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={'Logut'}
                        sx={{ opacity: true ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </List>
                </Box>
                <Arrow />
              </Popover>
            </div>
          )}
        </PopupState>
      </div>
    </ThemeProvider>
  );
}
