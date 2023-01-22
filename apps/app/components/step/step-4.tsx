import { TextField } from "@mui/material";
import { userForm } from "../../common/hooks/useForm";

const Step4 = () => {
  const { formik,onChange } = userForm();
  return (
    <div>
      <TextField
        name="floorNumber"
        variant="outlined"
        required
        fullWidth
        id="floorNumber"
        label="Numero de piso"
        autoFocus
        value={formik.values.floorNumber}
        onChange={onChange}
        error={Boolean(formik.errors.floorNumber)}
        helperText={formik.touched.floorNumber && formik.errors.floorNumber}
      />
    </div>
  );
};
export default Step4;
