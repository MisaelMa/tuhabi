import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import { Background } from "../components/background";
import LandingLayout from "../components/layout/landing.layout";

const Index = () => {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");

  return (
    <Background src="https://fondosmil.com/fondo/60032.jpg"  display="flex"
    justifyContent="center"
    alignItems="center">
  
   
    </Background>
  );
}

Index.Layout = LandingLayout
export default Index
