import { BottomNavigation, BottomNavigationAction, Container, useMediaQuery } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import { RMain, RToolbar } from '@ammc/components/src';
import React, { PropsWithChildren, useEffect } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { DrawerHeader } from '../app/document/DrawerHeader';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { SellProvider } from '../../common/hooks/context/sell.context';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { useSell } from '../../common/hooks/useSell';

const Information = dynamic(() => import('../Information'), {
  loading: () => <div>Loading...</div>,
})

interface AppBarProps {
  open?: boolean;
}

export interface AdminLayoutProps {
  site: string | null;
  layout: string | null;
}

const drawerWidth = 340;



const StepLayout: React.FC<PropsWithChildren> = (props) => {
  const theme = useTheme();
  const {menu, updateMenu, activeStep, maxSteps,pushShallowRoute} = useSell()


  const handleDrawerClose = () => {
    updateMenu(!menu);
  };
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(()=>{
    if(matches){
     if ( activeStep !== maxSteps - 1 ){
      updateMenu(true);
    
     } else {
     
      updateMenu(false);
     }
    } else {
      pushShallowRoute(8)
      updateMenu(false);
    }
  },[matches])

  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  
  return (
    

    <Box
      sx={{
        backgroundColor: (theme: any) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <RToolbar position="fixed"  style={{ background: 'white', color:'black', boxShadow: 'none', border:'none'}} elevation={0}>
        Tuhabi
        <Box sx={{ flexGrow: 1 }} />
      </RToolbar>
      <MuiDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="right"
        variant="persistent"
        open={menu}
      >
        <DrawerHeader style={{minHeight:48}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Information/>
      </MuiDrawer>
      
      <RMain open={menu} src="https://fondosmil.com/fondo/60032.jpg"  openRight={true} sx={{  flexGrow: 1,p: 3 }} drawerWidth={drawerWidth}>
        <DrawerHeader />
        <Container maxWidth="xl">{props.children}</Container>

      </RMain>
    </Box>
   
  );
};

export default StepLayout;
