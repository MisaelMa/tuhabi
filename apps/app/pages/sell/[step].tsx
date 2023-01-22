import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Step1 from "../../components/step/step-1";
import Step2 from "../../components/step/step-2";
import Step3 from "../../components/step/step-3";
import Step4 from "../../components/step/step-4";
import Step5 from "../../components/step/step-5";
import Step6 from "../../components/step/step-6";
import Step7 from "../../components/step/step-7";
import Step8 from "../../components/step/step-8";
import Step9 from "../../components/step/step-9";
import StepLayout from "../../components/layout/step.layout";
import Typography from "@mui/material/Typography";
import { isEmpty } from "../../common/utils/store.window";
import { useContextualRouting } from "next-use-contextual-routing";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { userForm } from "../../common/hooks/useForm";

const steps = [
  {
    path: "datos",
    label: "Select campaign settings",
    description: `datos.`,
    component: Step1,
  },
  {
    path: "contacto",
    label: "Create an ad group",
    description: "contacto",
    component: Step2,
  },
  {
    path: "direccion",
    label: "Create an ad",
    description: `direccion`,
    component: Step3,
  },
  {
    path: "datos-apartamento",
    label: "Create an ad",
    description: `datos-apartamento`,
    component: Step4,
  },
  {
    path: "amenidades",
    label: "Create an ad",
    description: `amenidades`,
    component: Step5,
  },
  {
    path: "parqueadero",
    label: "Create an ad",
    description: `fotos`,
    component: Step6,
  },
  {
    path: "precio",
    label: "precio",
    description: `precio`,
    component: Step7,
  },
  {
    path: "imagen",
    label: "Create an ad",
    description: `ascensor`,
    component: Step8,
  },
  {
    path: "ascensor",
    label: "Create an ad",
    description: `show`,
    component: Step9,
  },
];

const Rend = ({ Com }) => {
  return <Com></Com>;
};
const SellPage = () => {
  const theme = useTheme();
  const { formik } = userForm();
  const [activeStep, setActiveStep] = React.useState(null);
  const maxSteps = steps.length;
  const router = useRouter();
  const { step } = router.query;
  const { makeContextualHref, returnHref } = useContextualRouting();
  const handleNext = async () => {
    formik.submitForm();
    if (isEmpty(formik.errors)) {
      const index = activeStep + 1;
      pushShallowRoute(index);
    }
  };

  const handleBack = () => {
    const index = activeStep - 1;
    pushShallowRoute(index);
  };

  const pushShallowRoute = (index: number) => {
    setActiveStep((prevActiveStep) => index);
    router.push(makeContextualHref(), `${steps[index].path}`, {
      shallow: true,
    });
  };

  useEffect(() => {
    const { step } = router.query as { step: string };
    const index = steps.findIndex((item) => item.path === step);
    pushShallowRoute(index);
  }, []);

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
        <Box sx={{ height: 455, maxWidth: 600, width: "100%", p: 2 }}>
          {activeStep !== null && <Rend Com={steps[activeStep].component} />}
        </Box>
        {activeStep !== null && (
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
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
