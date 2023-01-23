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
    isDeck: false,
    price: 0,
    picture: '',
    //hasLift: false
}
export interface Sell {
    username: string;
    email: string;
    address: string;
    floorNumber: string;
    amenidades: string[]
    hasParking?: boolean
    isDeck?: boolean,
    price: number
    picture: File | any,
    hasLift?: boolean
}

export type SellContextType = {
    state: Sell,
    dialog: boolean,
    menu: boolean,
    updateMenu: (dialog: boolean)=>void
    updateDialog: (dialog: boolean)=>void
    activeStep: number
    setStep: (index: number)=>void
    update: (property: string,value: string | string[] | boolean | FileReader) => void;
  };
  
export const SellContext = createContext<SellContextType>({menu: true,updateMenu: (d: boolean)=>{}} as SellContextType);

export const SellProvider = ({ children }) => {
  const [state, setData] = useState(() => getLocalStorage("sell", initialState))
  const [activeStep, setActiveStep] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [menu, setMenu] = useState(true);
  const update = (property: string,value: string): void => {
    setData((prevState) =>{
        return {
            ...prevState,
            [property]: value
        }
    })
  };
  
  const setStep = (index: number)=>{
    setActiveStep((prevActiveStep) => index);
  }
  useEffect(() => {
    setLocalStorage("sell", state);
  }, [state]);

  const updateDialog = (value: boolean)=>{
    setDialog(value)
  }

  const updateMenu = (value: boolean)=>{
    setMenu(value)
  }
  return (
    <SellContext.Provider value={{ state, update, activeStep,setStep, dialog, updateDialog,updateMenu, menu }}>
      {children}
    </SellContext.Provider>
  );
};

