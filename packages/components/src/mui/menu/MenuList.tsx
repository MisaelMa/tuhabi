import React, { useState } from "react";

import List from "@mui/material/List";
import ListExpand from "./ListExapand";
import ListMenu from "./ListMenu";
import { RoutesApp } from "./route.interface";

/**
 * MenuList
 *
 * @param props
 * @param props.open
 * @param props.routes
 */
const MenuList = (props: { open: boolean; routes: RoutesApp[] }) => {
  const { open, routes } = props;
  // const [openNav, setOpenNav] = useState(false);
  const [menu] = useState(routes);
  /**
   * handleClick
   *
   * @param route
   */
  /*  const handleClick = async (route: RoutesApp): Promise<void> => {
    // console.log(route, ))
    const newMenu = [...menu];
    await findPathInRoutes(route.id, newMenu);
    setMenu(newMenu);
    setOpenNav(!openNav);
  }; */
  /**
   *findInChildren
   *
   * @param children
   * @param path
   * @param found
   */
  const findInChildren = (
    children: RoutesApp[],
    path: number,
    found = false
  ): boolean => {
    if (!found) {
      for (const child of children) {
        if (child.id === path) {
          found = true;
          child.open = !child.open;
        } else if (child.children) {
          found = findInChildren(child.children, path, found);
        }
      }
    }
    return found;
  };
  /**
   *findPathInRoutes
   *
   * @param path
   * @param routes
   */
  /*  const findPathInRoutes = (
    path: number,
    routes: RoutesApp[]
  ): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      try {
        let found = false;
        for (const route of routes) {
          if (route.id === path) {
            found = true;
            route.open = !route.open;
          } else if (!found) {
            if (route.children) {
              found = findInChildren(route.children, path);
            }
          }
        }
        resolve(found);
      } catch (e) {
        reject(e);
      }
    });
  }; */

  return (
    <List>
      {menu.map((rts, i) => {
        return rts.children.length === 0 ? (
          <ListMenu open={open} menu={rts} key={i} />
        ) : (
          <ListExpand open={open} key={i} menu={rts} />
        );
      })}
    </List>
  );
};

export default MenuList;
