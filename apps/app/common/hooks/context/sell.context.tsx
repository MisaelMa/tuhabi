/* eslint-disable react-hooks/rules-of-hooks */
import * as Yup from "yup";

import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/store.window";

import { number } from "yup/lib/locale";
import { useFormik } from "formik";
import { useReducer } from "react";

const initialState :Sell= {
    username: '',
    email: '',
    address:'',
    floorNumber: '',
    amenidades:[],
    hasParking: false,
    isDeck: false,
    price: 0,
    picture: '',
    hasLift: false
}
export interface Sell {
    username: string;
    email: string;
    address: string;
    floorNumber: string;
    amenidades: string[]
    hasParking: boolean
    isDeck: boolean,
    price: number
    picture: File | any,
    hasLift: boolean
}

export type SellContextType = {
    state: Sell,
    update: (property: string,value: string | string[] | boolean | FileReader) => void;
  };
  
export const SellContext = createContext<SellContextType>({state:initialState,update: (p: string,v: string): void=>{}});

export const SellProvider = ({ children }) => {
  const [state, setData] = useState(() => getLocalStorage("sell", initialState))
  const update = (property: string,value: string): void => {
    setData((prevState) =>{
        return {
            ...prevState,
            [property]: value
        }
    })
  };
  
  useEffect(() => {
    setLocalStorage("sell", state);
  }, [state]);

  return (
    <SellContext.Provider value={{ state, update }}>
      {children}
    </SellContext.Provider>
  );
};

