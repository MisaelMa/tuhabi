import * as React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";

import { Background } from "../../components/background";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Resumen from "../../components/Resument";
import StepLayout from "../../components/layout/step.layout";
import Typography from "@mui/material/Typography";
import { steps } from "../../common/config/sell.config";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSell } from "../../common/hooks/useSell";
import { useTheme } from "@mui/material/styles";

const Rend = ({ Com }) => {
  return <Com></Com>;
};
const SellPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const {
    activeStep,
    handleBack,
    handleNext,
    pushShallowRoute,
    dialog,
    updateDialog,
  } = useSell();
  const maxSteps = steps.length;
  const router = useRouter();
  const { step } = router.query;

  useEffect(() => {
    const index = steps.findIndex((item) => item.path === step);
    pushShallowRoute(index);
  }, []);

  const isNex = ()=> {
    return matches ?  activeStep !== maxSteps - 1 : activeStep !== maxSteps - 2  
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>
            {activeStep !== null && steps[activeStep].label}
          </Typography>
        </Paper>
        <Box
          sx={{
            height: 455,
            maxWidth: 600,
            width: "100%",
            p: 2,
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(255,255,255,0.5)",
            color: "white",
          }}
        >
          {activeStep !== null && <Rend Com={steps[activeStep].component} />}
        </Box>
        {activeStep !== null && (
          <MobileStepper
            variant="text"
            steps={matches ? maxSteps: maxSteps-1}
            position="static"
            activeStep={activeStep}
            nextButton={
              
              isNex() ? ( <Button
                  size="small"
                  onClick={()=> {
                      handleNext()
                    
                  }}
                  disabled={activeStep === maxSteps}
                >
                  {activeStep === maxSteps - 1 ? "Enviar" : "Next"}
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>): (<div></div>)
              
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        )}
      </Box>
      {
        !matches && (      <Button
          variant="contained"
          color="primary"
          onClick={() => updateDialog(true)}
          sx={{ bottom: 0, position: "absolute" }}
        >
          Resumen
        </Button>
  )
      }
      <Dialog
        open={dialog}
        onClose={() => updateDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Resumen
        </DialogTitle>
        <DialogContent>
        <Resumen></Resumen>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateDialog(false)} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export async function getStaticPaths() {
  return {
    paths: steps.map((item) => ({
      params: {
        step: item.path,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      step: params.step,
    },
  };
}

SellPage.Layout = StepLayout;
export default SellPage;
