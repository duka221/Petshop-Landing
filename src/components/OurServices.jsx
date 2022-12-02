import { Box, Button, Stack, Typography } from "@mui/material";
import OurServiceIcon from "../images/OurServiceIcon.png";
import scissors from "../images/scissors.png";
import yellowbg from "../images/yellowbg.png";
import ourservicevec from "../images/ourservicevec.png";
import servicegr from "../images/servicegr.png";

export const OurServices = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      backgroundColor="#EBE3CC"
      position="relative"
    >
      <Box sx={{ maxWidth: "lg", width: 1, py: 5 }}>
        <Box
          component="img"
          src={ourservicevec}
          sx={{ width: 150, position: "absolute", top: 50, left: 0 }}
        ></Box>

        <Stack
          display="flex"
          direction="column"
          justifyContent="space-around"
          gap={5}
        >
          <Typography
            fontSize="46px"
            fontWeight={600}
            fontFamily="Josefin Sans"
            color="#062D3E"
            lineHeight="60px"
          >
            Our Services
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              width="500px"
              height="580px"
              spacing={3}
              sx={{
                backgroundImage: `url(${yellowbg})`,
                backgroundRepeat: "no-repeat",
                p: 5,
              }}
            >
              <Box
                component="img"
                src={OurServiceIcon}
                width="70px"
                height="74px"
              />
              <Typography
                fontFamily="Josefin Sans"
                fontWeight={500}
                fontSize="26px"
                color="#062D3E"
                lineHeight="30px"
              >
                Pharmacy
              </Typography>
              <Typography
                fontFamily="Josefin Sans"
                fontWeight={400}
                fontSize="20px"
                color="#062D3E"
                lineHeight="31px"
              >
                Apoquel is an oral tablet that works differently than other
                allergy medications. It goes straight to the source to help
                relieve itch and inflammation at its core—addressing the
                underlying cause of irritation
              </Typography>
              <Button
                sx={{
                  borderRadius: 50,
                  textTransform: "none",
                  backgroundColor: "#062D3E",
                  color: "#FFFFFF",
                  width: "100px",
                }}
              >
                <Typography fontSize="15px" fontWeight={500} p={1}>
                  Explore
                </Typography>
              </Button>
            </Stack>
            <Stack width="400px" spacing={3}>
              <Box component="img" src={scissors} width="70px" height="74px" />
              <Typography
                fontFamily="Josefin Sans"
                fontWeight={500}
                fontSize="26px"
                color="#062D3E"
                lineHeight="30px"
              >
                Breed-specific Haircuts
              </Typography>
              <Typography
                fontFamily="Josefin Sans"
                fontWeight={400}
                fontSize="20px"
                color="#062D3E"
                lineHeight="31px"
              >
                Regular grooming is essential to your pet's health as it helps
                prevent skin issues such as matting.
              </Typography>
              <Button
                sx={{
                  borderRadius: 50,
                  textTransform: "none",
                  backgroundColor: "#062D3E",
                  color: "#FFFFFF",
                  width: "100px",
                }}
              >
                <Typography fontSize="15px" fontWeight={500} p={1}>
                  Explore
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Box
          component="img"
          src={servicegr}
          sx={{ position: "absolute", top: 1, right: 0 }}
        />
      </Box>
    </Stack>
  );
};
