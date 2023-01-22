import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Theme, styled } from "@mui/material/styles";

import { IRToolbar } from "./IRToolBar";
import { Toolbar } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  clipped?: boolean;
  drawerWidth?: number;
}

const AppBar = styled(MuiAppBar, {
  /**
   *shouldForwardProp
   *
   * @param prop - string
   */
  shouldForwardProp: (prop: string) => prop !== "open",
})<AppBarProps>(
  ({
    clipped,
    drawerWidth = 240,
    open,
    theme,
  }: AppBarProps & { theme: Theme }) => ({
    ...(clipped && { zIndex: theme.zIndex.drawer + 1 }),
    borderBottom: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(["margin", "width"], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),

    ...(open && {
      [theme.breakpoints.up("sm")]: {
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          duration: theme.transitions.duration.enteringScreen,
          easing: theme.transitions.easing.easeOut,
        }),
        width: `calc(100% - ${drawerWidth}px)`,
      },
    }),
  })
);

/**
 *RToolbar
 *
 * @param props - icon props
 * @param props.children - className for icon
 */
const RToolbar = (props: IRToolbar): JSX.Element => {
  const { children, ...more } = props;
  return (
    <AppBar {...more}>
      <Toolbar variant="dense">{children}</Toolbar>
    </AppBar>
  );
};
export default RToolbar;
