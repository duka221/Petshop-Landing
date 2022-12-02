import { TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import dog1 from "../images/ContactDog.png";
import rqa from "../images/rqa.png";


export const Contact = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100%",
        background: "linear-gradient(90deg, #FBBD08 50%, #ED5C01 50%)",
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ maxWidth: "lg", width: 1 ,py: 5}}>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Box sx={{ position: "relative" }}>
            <Box sx={{ width: 400, height: 380 }}>
              <Box
                component="img"
                src={dog1}
                sx={{ position: "absolute", left:"25%", zIndex: 2 }}
              />
            </Box>
            <Box
              component="img"
              src={rqa}
              sx={{
                transform: "rotate(90)",
                position: "absolute",
                top: "50%",
                zIndex: 1,
                left: 0,
              }}
            />
          </Box>

          <Box>
            <Stack width="400px">
              <Typography
                fontSize="46px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#062D3E"
                lineHeight="60px"
              >
                Subscribe & Get Pet Updatenews
              </Typography>
              <TextField
                id="standard-basic"
                label="Mail"
                variant="standard"
                color="primary"
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
