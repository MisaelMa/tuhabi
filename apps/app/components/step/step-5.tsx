import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";

import error from "next/error";
import { useSell } from "../../common/hooks/useSell";
import { useState } from "react";

const Step5 = () => {
  const { formik,  } = useSell();
  const { update } = useSell();
  const amenidate = ["Zona BBQ", "salón comunal", "parque de juegos"];
  const handleChange = (e) => {
  
    
    const { checked, name } = e.target;
    console.log(checked,name);
    if (checked) {
      const val = [...formik.values.amenidades, name];
      formik.setFieldValue("amenidades",val );
      update('amenidades', val);
    } else {
      const val = formik.values.amenidades.filter((v) => v !== name)
      formik.setFieldValue(
        "amenidades",
        val
      );
      update('amenidades', val);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Amenidades</FormLabel>
        <FormGroup>
          {amenidate.map((item, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  id={item}
                  name={item}
                  checked={formik.values.amenidades.includes(item)}
                  onChange={handleChange}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};
export default Step5;
