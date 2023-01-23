import { useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { steps } from "../common/config/sell.config";
import { useSell } from "../common/hooks/useSell";
import dynamic from 'next/dynamic';
const ShowInfo = dynamic(() => import("./showInfo"), {
  ssr: false,
})

export default function VerticalLinearStepper() {
  const { activeStep } = useSell();
  const itemsRef = useRef([]);

  useEffect(() => {
    if (activeStep) {
      itemsRef.current[activeStep].scrollIntoView({ behavior: "smooth" }, true);
    }
  }, [activeStep]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      {!isNaN(activeStep) && (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step
              ref={(el) => (itemsRef.current[index] = el)}
              key={step.label}
              expanded={true}
            >
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <ShowInfo step={index}></ShowInfo>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      )}
    </Box>
  );
}
