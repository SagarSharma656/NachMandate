import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import {
  Box,
  Button,
  Slide,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

import MandateDetails from "./steps/MandateDetails";
import CustomerAndBankDetails from "./steps/CustomerAndBankDetails";
import Preview from "./steps/Preview";
import Corporate from "./steps/Corporate";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const steps = [
  "Corporate",
  "Mandate Details",
  "Customer and Bank Details",
  "Preview",
];

function NACHMandate() {

  const [show_IFSC_ValidationForm, setShow_IFSC_ValidationForm] = useState<boolean>(false);


      const [activeStep, setActiveStep] = React.useState(0);
      const [skipped, setSkipped] = React.useState(new Set<number>());

      const isStepOptional = (step: number) => {
        return step === null; //step === 1 || step === 2 "here we can give step === {index} which steps index we can set optional";
      };

      const isStepSkipped = (step: number) => {
        return skipped.has(step);
      };

      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };

      const handleReset = () => {
        setActiveStep(0);
      };



  function handleSubmit(event: any) {
    event.preventDefault();
    // console.log(formData)
  }

  return (
    <Box sx={{ width: "100%", p: 1 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 3, mb: 1 }}>
            {activeStep === 0 ? (
              <Corporate />
            ) : activeStep === 1 ? (
              <MandateDetails />
            ) : activeStep === 2 ? (
              <CustomerAndBankDetails />
            ) : activeStep === 3 ? (
              <Preview />
            ) : null}
          </Box>
          <Box sx={{ position: "fixed", right: "20px", bottom: "15px" }}>
            <Button
              color="inherit"
              size="small"
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              startIcon={<KeyboardArrowLeftIcon />}
            >
              Back
            </Button>

            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button
              onClick={handleNext}
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
              size="small"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default NACHMandate;
