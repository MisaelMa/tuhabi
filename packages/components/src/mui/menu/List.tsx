import { styled, Theme } from "@mui/material/styles";

import ListItemButton from "@mui/material/ListItemButton";

interface PropsR {
  theme: Theme;
  open: boolean;
}
export const RListItem = styled(ListItemButton)<PropsR>((props: PropsR) => {
  const { open, theme } = props;
  return {
    "&.Mui-selected, &.Mui-selected:hover": {
      "&, & .MuiListItemIcon-root": {
        color: "white",
      },
      backgroundColor: theme.palette.primary.main,
      borderLeft: `5px solid red`,
      color: "white",
    },
    "&:hover": {
      "&, & .MuiListItemIcon-root": {
        color: "white",
      },
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },

    borderRadius: 3,
    height: "35px !important",
    justifyContent: open ? "initial" : "center",
    marginBottom: 1,
    marginLeft: 7,
    marginRight: 7,
    minHeight: 35,
    pl: 4,
    px: 2.5,
  };
});
