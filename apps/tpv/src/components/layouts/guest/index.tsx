import { LayoutsProps } from '../../../common/types/core';
import { AppRoles } from '../../core/globals';
import { AdminLayoutProps } from '../admin';

import { Theme, useMediaQuery } from '@mui/material';
import Link from '@mui/material/Link';

import React, { useState, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, Grid, CardContent, Avatar, CardMedia } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import SearchBox from '@/components/core/Inputs/SearchBox';

export interface CustomerLayoutProps extends LayoutsProps<AppRoles.Customer> {
  BoxMainProps?: BoxProps;
  showToolbarSpace?: boolean;
}
import Container from '@mui/material/Container';
import { styled, CSSObject } from '@mui/material/styles';

import MoreIcon from '@mui/icons-material/MoreVert';
import DrawerBox from '@/components/core/Drawer/DrawerBox';
import Popover from '@mui/material/Popover';
import SearchCollapse from '@/components/app/SearchCollapse';
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "white",
      fontSize: 13,
      height: 52,
      position: 'relative',
      right: 0,
      top: 0,
      zIindex: 31,
    },
    appBarShift: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      backgroundColor: "white",
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0),
      justifyContent: 'flex-end',
    },
    mainHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0px',
      height: '60px',
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
    contentShift: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    rootNav: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    title: {
      fontWeight: 700,
      fontSize: 24,
      margin: 0,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
  }),
);
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://recreando/">
        Recreando
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// @ts-ignore
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Guest: React.FC<PropsWithChildren>= (props) => {
  const isDeviceMobile = useMediaQuery<Theme>((myTheme) =>
    myTheme.breakpoints.down('sm'),
  );
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState({
    search: '',
  });

  const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prevState) => {
      return { ...prevState, ...{ search: e.target.value } };
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [state, setState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const opened = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const title = [
    {
      letter: 'F',
      color: '#00A3A3',
    },
    {
      letter: 'r',
      color: '#D1AF74',
    },
    {
      letter: 'a',
      color: '#A1013F',
    },
    {
      letter: 'g',
      color: '#FF8287',
    },
    {
      letter: 'm',
      color: '#1875D1',
    },
    {
      letter: 'e',
      color: '',
    },
    {
      letter: 'n',
      color: '#AF4BC6',
    },
    {
      letter: 't',
      color: '#20B136',
    },
  ];

  const title2 = [
    {
      letter: 'R',
      color: '#42B883',
    },
    {
      letter: 'e',
      color: '#42B883',
    },
    {
      letter: 'c',
      color: '#5ED3F3',
    },
    {
      letter: 'r',
      color: '#5ED3F3',
    },
    {
      letter: 'e',
      color: '#5ED3F3',
    },
    {
      letter: 'a',
      color: '',
    },
    {
      letter: 'n',
      color: '#AF4BC6',
    },
    {
      letter: 'd',
      color: '#20B136',
    },
    {
      letter: 'o',
      color: '#1875D1',
    },
  ];
  return (

      <Box
        component="main"
        sx={{
          // backgroundColor: (theme) =>
          //   theme.palette.mode === 'light'
          //     ? theme.palette.grey[100]
          //     : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <AppBar position="fixed"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Toolbar variant={'dense'} >
            <Typography className={classes.title} variant="h6" noWrap>
              Recreando
              {/* {
                title2.map((v,i)=>(
                  <span key={i} style={{color:v.color}}>
                    {v.letter}
                  </span>
                ))
              } */}
            </Typography>

            {/* <Typography sx={{ml:5}}  aria-describedby={id} variant="contained" noWrap onMouseOver={handleClick} onClick={handleClick}>
              Categories
            </Typography>
            <Popover
              id={id}
              open={opened}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover> */}
            <Box sx={{ flexGrow: 1 }} />
            <SearchCollapse />
            <Box sx={{ flexGrow: 1 }} />
             <Button href='/sign-in' sx={{ my: 1, mx: 1.5, color: "inherit",}}>Iniciar Session</Button>

          </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
          <DrawerHeader style={{marginTop:5}}/>
          {props.children}
        </Container>
        <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >

        <Container maxWidth="sm">
        {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Item>Recreando</Item>
            <Item> @Recreando {new Date().getFullYear()}</Item>
          </Box> */}
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
      </Box>
  );
};

export default Guest;
