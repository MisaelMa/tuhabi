import { CSSObject, Theme, styled } from "@mui/material/styles";

import { Box } from "@mui/material";

/**
 *Main
 *
 * @param prop
 */

/**
 *ForwardProp
 *
 * @param prop
 */
const ForwardProp = (prop: string): boolean => prop !== "open";

interface SwippeOpen {
  open?: boolean;
}

interface SwippeOpen {
  open?: boolean;
  openLeft?: boolean;
  openRight?: boolean;
  drawerWidth?: number;
}
interface MainStyleProps extends SwippeOpen {
  theme: Theme;
  open: boolean;
}
/**
 *MainStyle
 *
 * @param prop
 * @param prop.theme
 * @param prop.open
 * @param prop.openLeft
 * @param prop.openRight
 * @param prop.drawerWidth
 */
const MainStyle = ({
  theme,
  open,
  openLeft,
  openRight,
  drawerWidth = 240,
}: MainStyleProps): CSSObject => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openLeft && { marginRight: `-${drawerWidth}px` }),
  ...(openRight && { marginLeft: `-${drawerWidth}px` }),
  [theme.breakpoints.up("md")]: {
    ...(open &&
      openLeft && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
      }),
    ...(open &&
      openRight && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: `${drawerWidth}px`,
      }),
  },
});

/**
 *Main
 *
 * @param prop
 */
export const Main = styled("main")<SwippeOpen>((props) => MainStyle(props));
