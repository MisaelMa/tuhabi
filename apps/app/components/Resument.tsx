import { Box, Grid } from "@mui/material";

import dynamic from "next/dynamic";

const ShowInfo = dynamic(() => import("./showInfo"), {
  ssr: false,
});
const Resumen = () => {
  return (
    <Box
      sx={{
        maxHeight: 400,
        p: 1,
        overflowY: "scroll",
        backgroundColor: "white",
        color: "black",
      }}
    >
      {[...Array(4)].map((item, i) => (
        <ShowInfo key={i} step={i} />
      ))}
      <br />
      <Grid container sx={{ p: 2 }} spacing={2}>
        <Grid xs={6}>
          <ShowInfo step={4} />
        </Grid>
        <Grid xs={6}>
          <ShowInfo step={7} />
        </Grid>
      </Grid>
      <ShowInfo step={5} />

      <ShowInfo step={6} />

      <ShowInfo step={8} />
    </Box>
  );
};
export default Resumen
