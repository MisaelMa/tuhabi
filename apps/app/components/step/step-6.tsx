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

import { useSell } from "../../common/hooks/useSell";

const Step6 = () => {
  const { formik, onChange, update } = useSell();

  const handleChange = (e) => {
    const { checked, name } = e.target;
    formik.setFieldValue(name, checked);
    update(name, checked);
  };
  return (
    <Box sx={{ display: "flex",flexDirection: 'column'  }}>
      <FormControl sx={{ m: 3 }} 
        error={Boolean(formik.errors.hasParking)}
      component="fieldset" variant="standard">
        <FormLabel component="legend">¿Tiene parqueadero?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="hasParking"
                name="hasParking"
                checked={formik.values.hasOwnProperty('hasParking') ? formik.values.hasParking ?  true : false : false }
                onClick={(e)=>{
                  handleChange(e);
                  formik.setFieldValue("isDeck", false);
                  update("isDeck", false);
                
                }}
              />
            }
            label={"Si"}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="hasParking"
                name="hasParking"
                checked={formik.values.hasOwnProperty('hasParking') ? !formik.values.hasParking ?  true: false : false }
                onClick={(e)=>{
                  const value = formik.values.hasOwnProperty('hasParking') ? !formik.values.hasParking ?  true: false : false
                  formik.setFieldValue("hasParking", value);
                  update("hasParking", value);
                  formik.setFieldValue("isDeck", false);
                  update("isDeck", false);
                
                }}
              />
            }
            label={"No"}
          />
        </FormGroup>
        {Boolean(formik.errors.hasParking) && (
          <FormHelperText>{formik.errors.hasParking}</FormHelperText>
        )}
      </FormControl>

      {formik.values.hasParking && (
        <FormControl sx={{ m: 3 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="isDeck"
                  name="isDeck"
                  checked={formik.values.isDeck}
                  onChange={handleChange}
                />
              }
              label={"¿Es cubierto?"}
            />
          </FormGroup>
          {formik.errors.isDeck && (
          <FormHelperText>{formik.errors.isDeck}</FormHelperText>
        )}
        </FormControl>
      )}
    </Box>
  );
};
export default Step6;
