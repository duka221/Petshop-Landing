import { TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import dog1 from "../images/ContactDog.png";

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
      <Box sx={{ maxWidth: "lg", width: 1 }}>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Box component="img" src={dog1} />
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
                label="Standard"
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
