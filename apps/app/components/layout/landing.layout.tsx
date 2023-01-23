import { Avatar, Card, CardContent, CardMedia, useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from '@mui/material/Button';
import { CSSObject, styled } from "@mui/material/styles";
import React, { PropsWithChildren, useState } from "react";
import { Theme, useMediaQuery } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { DrawerHeader } from "../app/document/DrawerHeader";
import Link from "@mui/material/Link";
import MoreIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import RToolbar from "@ammc/components/src/app/RToolBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from '@mui/material/colors';

const drawerWidth = 240;

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme: any) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme: any) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme: any) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://recreando/">
        Recreando
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const LandingLayout: React.FC<PropsWithChildren> = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState({
    search: "",
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
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const opened = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme: any) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <RToolbar
        position="fixed"
        style={{
          background: "white",
          color: "black",
          boxShadow: "none",
          border: "none",
        }}
        elevation={0}
      >
        Tuhabi
        <Box sx={{ flexGrow: 1 }} />
        <ColorButton variant="contained" href="/sell/datos" sx={{ my: 1, mx: 1.5, }}>
          Vender
        </ColorButton>
      </RToolbar>
      <DrawerHeader />
      <Container>{props.children}</Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme: any) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default LandingLayout;
