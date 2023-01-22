import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { getFile } from "../../common/utils/store.window";
import { useSell } from "../../common/hooks/useSell";
import { userForm } from "../../common/hooks/useForm";

const Step8 = () => {
  const { formik,  } = userForm();
  const { update } = useSell();
  const [src, setSrc] = useState('')
  const [selectedImage, setSelectedImage] = useState<File>();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      var file = e.target.files[0];
      var reader = new FileReader()
      reader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result as string; 
        formik.setFieldValue('picture',srcData)
        update('picture',srcData)
      }

      reader.readAsDataURL(file);

      setSelectedImage(file);
    }
  };

  useEffect(()=>{
    if (formik.values.picture){
      const file = getFile(formik.values.picture)
      console.log(file);
      
      setSelectedImage(file);
    }
  },[])
  return (
    <Box
      display="flex"
      sx={{ height: 455, maxWidth: 600, width: "100%", p: 2 }}
      justifyContent="center"
      alignItems="center"
    >
      <Box  display="grid">

       {selectedImage && (<img style={{width:200}} src={URL.createObjectURL(selectedImage)}/>)}
      <Button variant="contained" component="label">
        Upload File
        <input type="file" accept="image/*;capture=camera" hidden  onChange={imageChange}/>
      </Button>
      </Box>
     
    </Box>
  );
};
export default Step8;
