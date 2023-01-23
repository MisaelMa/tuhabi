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

const Step9 = () => {
  const { formik, onChange, update } = useSell();
  const handleChange = (e) => {
    const { checked, name } = e.target;
    formik.setFieldValue(name, checked);
    update(name, checked);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl
        sx={{ m: 3 }}
        error={Boolean(formik.errors.hasLift)}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">¿Tiene Elevador?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="hasLift"
                name="hasLift"
                checked={
                  formik.values.hasOwnProperty("hasLift")
                    ? formik.values.hasLift
                      ? true
                      : false
                    : false
                }
                onClick={(e) => {
                  handleChange(e);
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
                id="hasLift"
                name="hasLift"
                checked={
                  formik.values.hasOwnProperty("hasLift")
                    ? !formik.values.hasLift
                      ? true
                      : false
                    : false
                }
                onClick={(e) => {
                  const value = formik.values.hasOwnProperty("hasLift")
                    ? !formik.values.hasLift
                      ? true
                      : false
                    : false;
                  formik.setFieldValue("hasLift", value);
                  update("hasLift", value);
                }}
              />
            }
            label={"No"}
          />
        </FormGroup>
        {Boolean(formik.errors.hasLift) && (
          <FormHelperText>{formik.errors.hasLift}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
export default Step9;
