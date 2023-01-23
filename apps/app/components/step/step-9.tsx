import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";

import { useSell } from "../../common/hooks/useSell";

const Step9 = () => {
  const { formik, onChange ,update} = useSell();
  const handleChange = (e) => {
    const { checked, name } = e.target;
    formik.handleChange(e);
    update(name, checked);
  
  };
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }}  error={Boolean(formik.errors.hasLift)} component="fieldset" variant="standard">
        <FormGroup>
          
            <FormControlLabel
              control={
                <Checkbox
                  id="hasLift"
                  name="hasLift"
                  checked={formik.values.hasLift}
                  onChange={handleChange}
                />
              }
              label={'¿Tiene ascensor?'}
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
