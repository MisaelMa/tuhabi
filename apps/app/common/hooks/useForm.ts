/* eslint-disable react-hooks/rules-of-hooks */
import * as Yup from "yup";

import React, { createContext, useEffect, useState } from "react";

import { useFormik } from "formik";
import { useSell } from "./useSell";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string()
    .email()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export const userForm = () => {
  const { state, update } = useSell();
  const handleChange = (name: string, value: string) => {
    update(name, value);
  };

  const formik = useFormik({
    initialValues: state,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
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
  return {
    formik,
    handleChange,
    onChange,
  };
};
