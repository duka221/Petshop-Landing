import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Vector2 from "../images/Vector2.png";
import Ellipse from "../images/Ellipse.png";
import DogPic from "../images/DogPic.png";
import dog1 from "../images/Ellipse 335.png";
import dog2 from "../images/Ellipse 336.png";
import dog3 from "../images/Ellipse 337.png";
import dog5 from "../images/Ellipse 339.png";
import dog6 from "../images/Ellipse 340.png";
import dog7 from "../images/Ellipse 341.png";
import dog8 from "../images/Ellipse 342.png";
import dog9 from "../images/Ellipse 336.png";
import dog10 from "../images/Ellipse 344.png";
import dog11 from "../images/Ellipse 345.png";
import dog12 from "../images/Ellipse 346.png";
import dog13 from "../images/Ellipse 340.png";

export const Service = () => {
  const images = [dog1, dog2, dog3, dog5, dog6, dog7];
  const images2 = [dog8, dog9, dog10, dog11, dog12, dog13];
  return (
    <>
      <Stack
        display="flex"
        justifyContent="space-between"
        backgroundColor="#ED5C01"
        minHeight="100%"
      >
        <Box sx={{ maxWidth: "100%" }}>
          <Stack direction="row" justifyContent="space-between">
            <Box component="img" src={Vector2} width="143px" height="143px" />
            <Box
              mt={10}
              sx={{
                backgroundImage: `url(${Ellipse})`,
                width: "154px",
                height: "154px",
              }}
            >
              <Typography
                fontSize="81px"
                fontWeight={700}
                lineHeight="92px"
                textTransform="uppercase"
                color="#062D3E"
                fontFamily="Josefin Sans"
                textAlign="center"
                mt={3.5}
              >
                45+
              </Typography>
            </Box>
            <Stack
              direction="column"
              s
              alignItems="center"
              justifyContent="center"
            >
              <Stack direction="row" gap={3} alignItems="center">
                <Stack direction="column" gap={2}>
                  <Box component="img" src={dog9} width="95px" height="95px" />
                  <Box component="img" src={dog5} width="95px" height="95px" />
                </Stack>
                <Stack justifyContent="center" alignItems="center">
                  <Typography
                    textAlign="center"
                    lineHeight="92px"
                    color="#FFFFFF"
                    textTransform="capitalize"
                    fontFamily="Josefin Sans"
                    fontSize="33px"
                    fontWeight={500}
                  >
                    {" "}
                    Dog (JASPER){" "}
                  </Typography>
                  <Box
                    component="img"
                    src={DogPic}
                    width="150px"
                    height="150px"
                  />
                </Stack>
                <Stack direction="column" gap={2}>
                  <Stack gap={2} direction="row">
                    {images.map((image) => (
                      <Box
                        component="img"
                        src={image}
                        width="80px"
                        height="80px"
                      />
                    ))}
                  </Stack>
                  <Stack gap={2} direction="row">
                    {images2.map((image) => (
                      <Box
                        component="img"
                        src={image}
                        width="80px"
                        height="80px"
                      />
                    ))}
                  </Stack>
                </Stack>
              </Stack>

              {/* <Stack direction="row" gap={3}>
                <Box component="img" src={dog9} width="95px" height="95px" />
                <Box bottom="50px">
                  <Typography
                    textAlign="center"
                    lineHeight="92px"
                    color="#FFFFFF"
                    textTransform="capitalize"
                    fontFamily="Josefin Sans"
                    fontSize="33px"
                    fontWeight={500}
                  >
                    {" "}
                    Dog (JASPER){" "}
                  </Typography>
                </Box>
                {images.map((image)=>(
                <Box component="img" src={image} width="80px" height="80px" />
                ))}
              </Stack>
              <Stack direction="row" gap={4}>
              <Box component="img" src={dog6} width="95px" height="95px" />
              <Box
                  component="img"
                  src={DogPic}
                  width="150px"
                  height="150px"
                />
              {images2.map((image)=>(    
                <Box component="img" src={image} width="80px" height="80px" />
                ))}
                
              
              </Stack> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
