import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useSell } from "../../common/hooks/useSell";

const Step3 = () => {
  const { formik, onChange } = useSell();
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