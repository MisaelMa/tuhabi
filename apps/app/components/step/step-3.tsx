import { TextField } from "@mui/material";
import { useEffect } from "react";
import { userForm } from "../../common/hooks/useForm";

const Step3 = () => {
  const { formik, onChange } = userForm();
  return (
    <div>
      <TextField
        name="address"
        variant="outlined"
        required
        fullWidth
        id="address"
        label="Direccion"
        autoFocus
        value={formik.values.address}
        onChange={onChange}
        error={Boolean(formik.errors.address)}
        helperText={Boolean(formik.errors.address) && formik.errors.address}
      />
    </div>
  );
};
export default Step3;