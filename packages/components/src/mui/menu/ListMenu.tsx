import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RListItem } from "./List";
import { RoutesApp } from "./route.interface";
import StarBorder from "@mui/icons-material/StarBorder";
import { useRouter } from "next/router";

/**
 *ListMenu
 *
 * @param props
 * @param props.menu
 * @param props.open
 */
const ListMenu = (props: { menu: RoutesApp; open: boolean }) => {
  const { menu, open } = props;
  const router = useRouter();
  /**
   *goTo
   *
   * @param item RoutesApp
   */
  const goTo = (item: RoutesApp): void => {
    router.push(item.url);
  };

  return (
    <RListItem
      selected={router.asPath === menu.url}
      open={open}
      onClick={(): void => {
        goTo(menu);
      }}
    >
      <ListItemIcon
        sx={{
          justifyContent: "center",
          minWidth: 0,
          mr: open ? 3 : "auto",
        }}
      >
        {/* <IconButton size="small" color="inherit">
          <Icon
            path={item.icon}
            size={1}
            horizontal
            color={router.pathname === item.url ? 'white' : 'black'}
          />
        </IconButton> */}
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={menu.name} sx={{ opacity: open ? 1 : 0 }} />
      {/*     <ListItemText
        primary={`${menu.name} ${router.pathname} ${menu.url}`}
        sx={{ opacity: open ? 1 : 0 }}
      /> */}
    </RListItem>
  );
};
export default ListMenu;
