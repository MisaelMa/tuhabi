import { TextField } from "@mui/material";
import { userForm } from "../../common/hooks/useForm";

const Step1 = () => {
  const { formik, onChange } = userForm();
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
        helperText={Boolean(formik.errors.username) && formik.errors.username}
      />
    </div>
  );
};
export default Step1;
