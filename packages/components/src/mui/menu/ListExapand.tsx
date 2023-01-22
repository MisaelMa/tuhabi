import * as React from "react";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListMenu from "./ListMenu";
import { RListItem } from "./List";
import { RoutesApp } from "./route.interface";

/**
 *ListExpand
 *
 * @param props
 * @param props.menu
 * @param props.open
 */
const ListExpand = (props: { menu: RoutesApp; open: boolean }) => {
  const [expand, setExpand] = React.useState(false);
  const { menu, open } = props;
  /**
   *handleClick
   */
  const handleClick = (): void => {
    setExpand(!expand);
  };

  return (
    <>
      <RListItem open={open} onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={menu.name} />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </RListItem>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.children.map((child, i) => {
            return child.children.length === 0 ? (
              <ListMenu open={open} key={i} menu={child} />
            ) : (
              <ListExpand open={open} key={i} menu={child} />
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default ListExpand;
