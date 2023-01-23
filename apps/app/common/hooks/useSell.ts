/* eslint-disable react-hooks/rules-of-hooks */

import * as Yup from "yup";

import React, { createContext, useContext, useEffect, useState } from "react";

import { SellContext } from "./context/sell.context";
import { isEmpty } from "../../common/utils/store.window";
import { steps } from "../config/sell.config";
// @ts-ignore
import { useContextualRouting } from "next-use-contextual-routing";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  address: Yup.string().required("Required"),
  floorNumber: Yup.number().max(50, "Too Long!").required("Required"),
  hasParking: Yup.boolean().required("Required"),
  isDeck: Yup.boolean().required("Required"),
  price: Yup.number().min(1, "Precio muy bajo").required("Required"),
  hasLift: Yup.boolean().required("Required"),
});
const validateStep = {
  0: ["username"],
  1: ["email"],
  2: ["address"],
  3: ["floorNumber"],
  5: ["hasParking", "isDeck"],
  6: ["price"],
};
export const useSell = () => {
  const {
    update,
    state,
    menu,
    updateMenu,
    activeStep,
    setStep,
    dialog,
    updateDialog,
  } = useContext(SellContext);
  const router = useRouter();
  const { makeContextualHref, returnHref } = useContextualRouting();
  const maxSteps = steps.length;
  const handleChange = (name: string, value: string) => {
    update(name, value);
  };

  const formik = useFormik({
    initialValues: state,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      if (activeStep === maxSteps - 1) {
        updateMenu(false);
        //updateDialog(true);
        //alert(JSON.stringify(values, null, 2));
      }
    },
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange(name, value);
    formik.handleChange(e);
  };
  useEffect(() => {
    formik.setValues(state);
  }, [state]);

  const handleNext = async () => {
    formik.submitForm();
    const index = activeStep + 1;
    const isNext = validateCheck();
    if (isNext) {
      if (index < maxSteps) pushShallowRoute(index);
    }
  };

  const validateCheck = () => {
    const fields = validateStep[activeStep] || [];
    const list: string[] = fields.filter((element) => {
      return !!formik.errors[element];
    });
    const pass = list.length > 0 ? false : true;
    return pass;
  };

  const handleBack = () => {
    const index = activeStep - 1;
    pushShallowRoute(index);
  };
  const pushShallowRoute = (index: number) => {
    setStep(index);
    router.push(makeContextualHref(), `${steps[index].path}`, {
      shallow: true,
    });
  };

  return {
    formik,
    handleChange,
    onChange,
    update,
    state,
    activeStep,
    pushShallowRoute,
    setStep,
    handleBack,
    handleNext,
    dialog,
    updateDialog,
    menu,
    maxSteps,
    updateMenu,
  };
};
