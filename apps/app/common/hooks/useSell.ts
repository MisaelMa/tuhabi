import { SellContext } from "./context/sell.context";
import { useContext } from "react";

export const useSell = () => {
  return useContext(SellContext);
};
