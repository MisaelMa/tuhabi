import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";

import { useSell } from "../../common/hooks/useSell";
import { userForm } from "../../common/hooks/useForm";

const Step9 = () => {
  const { formik, onChange } = userForm();
  const { update } = useSell();
  const handleChange = (e) => {
    const { checked, name } = e.target;
    formik.handleChange(e);
    update(name, checked);
  
  };
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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
      </FormControl>
    </Box>
  );
};
export default Step9;
