import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useSell } from "../../common/hooks/useSell";

const Step2 = () => {
  const { formik, onChange } = useSell();

  return (
    <div>
      <TextField
        autoComplete="password"
        name="email"
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Correo"
        autoFocus
        value={formik.values.email}
        onChange={onChange}
        error={Boolean(formik.errors.email)}
        helperText={Boolean(formik.errors.email) && formik.errors.email}
      />
    </div>
  );
};
export default Step2;
