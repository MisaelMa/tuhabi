
import { Theme, useMediaQuery, useTheme } from '@mui/material';
import Link from '@mui/material/Link';

import React, { useState, PropsWithChildren} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';

export interface CustomerLayoutProps {
  BoxMainProps?: BoxProps;
  showToolbarSpace?: boolean;
}
import Container from '@mui/material/Container';
import { styled, CSSObject } from '@mui/material/styles';
const drawerWidth = 240;
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

const LoginLayout:  React.FC<PropsWithChildren> = (props) => {
  const isDeviceMobile = useMediaQuery<Theme>((myTheme) =>
    myTheme.breakpoints.down('sm'),
  );
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
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />

        <DrawerHeader/>
        <Container>
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
        <Box
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
          </Box>
        <Container maxWidth="sm">

          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
      </Box>
  );
};

export default LoginLayout;