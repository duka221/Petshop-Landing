import React from "react";
import { Box, Stack } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import { Typography } from "@mui/material";

export const Reviews = () => {
  const Person = [
    {
      text: "As we continue to push for better regulation in the Australian pet food industry it can be hard to trust many pet food brands. Our 2021 Best Cat Food in Australia list will offer you a great starting point in deciding what to feed your cat.",
      image: avatar1,
    },
    {
      text: "Crank this out fast track . Bleeding edge net net, but design thinking, but out of scope. Have bandwidth. Blue sky land it in region, yet it just needs more cowbell a loss a day will keep you focus, so focus on the customer journey.",
      image: avatar1,
    },
    {
      text: "Deploy to production we need to think big start small and scale fast to energize our clients. Vertical integration. The last person we talked to said this would be ready deep dive, and upstream selling. Can we parallel path bottleneck mice.",
      image: avatar1,
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100%"
      backgroundColor="#EBE3CC"
    >
      <Box sx={{ maxWidth: "lg", width: 1 }}>
                <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                gap={10}
              >
                <Box
                  component="img"
                  src={Person[0].image}
                  sx={{ width: "300px", height: "400px" }}
                />
                <Stack direction="column" display="flex" gap={2}>
                  <Typography
                    fontSize="46px"
                    fontWeight={600}
                    fontFamily="Josefin Sans"
                    color="#062D3E"
                    lineHeight="60px"
                  >
                    Customer Reviews
                  </Typography>
                  <Typography
                    fontSize="22px"
                    fontWeight={500}
                    fontFamily="Josefin Sans"
                    color="#062D3E"
                    textAlign="start"
                    lineHeight="34px"
                  >
                   {Person[activeStep].text}
                  </Typography>
                  <Stack direction="column"></Stack>
      
                  <Box sx={{ justifyContent: "flex-start" }}></Box>
                  <MobileStepper
                    variant="dots"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                      borderStyle: "rounded",
                      borderRadius: 50,
                      maxWidth: 200,
                      alignItems: "center",
                      backgroundColor: "#189CAB",
                    }}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === 2}
                        sx={{ color: "#FFFFFF" }}
                      >
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
                        sx={{ color: "#FFFFFF" }}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                      </Button>
                    }
                  />
                </Stack>
              </Stack>
        
      </Box>
    </Stack>
  );
};
