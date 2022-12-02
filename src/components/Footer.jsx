import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import dots from "../images/dots.png";
import FB from "../images/FB.png";
import insta from "../images/insta.png";
import twit from "../images/twit.png";

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
          <Box component="img" src={dots} width="200px" height="200px" />
          <Stack direction="column" display="flex">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  About
                </Typography>
              </Button>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Project
                </Typography>
              </Button>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Service
                </Typography>
              </Button>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Client
                </Typography>
              </Button>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Team
                </Typography>
              </Button>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Blog
                </Typography>
              </Button>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Contact
                </Typography>
              </Button>
            </Stack>
            <Stack direction="row" spacing={3}>
              <Button>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  fontFamily="Josefin Sans"
                  color="#EBE3CC"
                  lineHeight="60px"
                >
                  Flow
                </Typography>
              </Button>

              <Button>
                <Box component="img" src={FB} width="35px" height="35px" />
              </Button>
              <Button>
                <Box component="img" src={insta} width="35px" height="35px" />
              </Button>
              <Button>
                <Box component="img" src={twit} width="35px" height="35px" />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
