import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";

import { useSell } from "../../common/hooks/useSell";
import { userForm } from "../../common/hooks/useForm";

const Step6 = () => {
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
                  id="hasParking"
                  name="hasParking"
                  checked={formik.values.hasParking}
                  onChange={(e)=>{
                    handleChange(e)
                    formik.setFieldValue('isDeck', false);
                    update('isDeck', false);
                  }}
                />
              }
              label={'¿Tiene parqueadero?'}
            />
        </FormGroup>
        {formik.values.hasParking &&(<FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="isDeck"
                  name="isDeck"
                  checked={formik.values.isDeck}
                  onChange={handleChange}
                />
              }
              label={'¿Es cubierto o no?'}
            />
        </FormGroup>)}
        
      </FormControl>
    </Box>
  );
};
export default Step6;
