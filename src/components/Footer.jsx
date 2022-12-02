import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import dots from "../images/dots.png";

export const Footer = () => {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="30vh"
      backgroundColor="#062D3E"
    >
      <Box sx={{ maxWidth: "lg", width: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontSize="46px"
            fontWeight={600}
            fontFamily="Josefin Sans"
            color="#ED5C01"
            lineHeight="60px"
          >
            Pet-First
          </Typography>
          <Stack direction="column" display="flex" gap={2}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                About
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Project
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Service
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Client
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Team
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Blog
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Contact
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Flow
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Hello
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight={600}
                fontFamily="Josefin Sans"
                color="#EBE3CC"
                lineHeight="60px"
              >
                Hello
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
