import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface IRToolbar extends MuiAppBarProps {
  open?: boolean;
  children: React.ReactNode;
}
