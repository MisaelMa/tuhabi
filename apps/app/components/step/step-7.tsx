import {InputAttributes, NumericFormat, NumericFormatProps} from 'react-number-format';

import React from 'react';
import { TextField } from "@mui/material";
import { type } from 'os';
import { useSell } from "../../common/hooks/useSell";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
const NumberFormatCustom = React.forwardRef<
NumericFormatProps<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;
  
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      valueIsNumericString
      onValueChange={(values) => {
        console.log(values);
        
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
});
const Step7 = () => {
  const { formik,onChange } = useSell();
  return (
    <div>
      <TextField
        name="price"
        variant="outlined"
        required
        fullWidth
        id="price"
        label="Precio"
        autoFocus
        value={formik.values.price}
        onChange={onChange}
        prefix="$"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        error={Boolean(formik.errors.price)}
        helperText={Boolean(formik.errors.price) && formik.errors.price}
      />
    </div>
  );
};
export default Step7;
