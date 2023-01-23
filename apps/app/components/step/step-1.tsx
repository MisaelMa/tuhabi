import { TextField } from "@mui/material";
import { useSell } from "../../common/hooks/useSell";

const Step1 = () => {
  const { formik, onChange } = useSell();
  return (
    <div>
      <TextField
        name="username"
        variant="outlined"
        required
        fullWidth
        id="username"
        label="username"
        autoFocus
        value={formik.values.username}
        onChange={onChange}
        error={Boolean(formik.errors.username)}
        helperText={Boolean(formik.touched.username) && formik.errors.username}
      />
    </div>
  );
};
export default Step1;
