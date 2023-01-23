import { TextField } from "@mui/material";
import { useSell } from "../../common/hooks/useSell";

const Step4 = () => {
  const { formik,onChange } = useSell();
  return (
    <div>
      <TextField
        name="floorNumber"
        variant="outlined"
        required
        fullWidth
        id="floorNumber"
        label="Numero de piso"
        type="number"
        autoFocus
        value={formik.values.floorNumber}
        onChange={onChange}
        error={Boolean(formik.errors.floorNumber)}
        helperText={Boolean(formik.errors.floorNumber) && formik.errors.floorNumber}
      />
    </div>
  );
};
export default Step4;
