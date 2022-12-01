import { Box, Stack } from "@mui/system"
import PetCare from "../images/PetCare.png"
import AboutPet from "../images/AboutPet.png"
import Group from "../images/Group.png"

import { Button, Typography } from "@mui/material";
export const Care = () => {

    return(
        <Stack display='flex' justifyContent='space-between'  backgroundColor="#189CAB">
                <Box sx={{maxWidth:"lg", width: 1}}>
                <Box component="img" src={PetCare} sx={{float:"left",mt:45}}>
                </Box>
                <Stack display="flex" direction="row"  justifyContent="space-around" mt={10} gap={5}>
                    <Box component="img" src={AboutPet} />
                    <Stack direction="column" display="flex"  gap={5}>
                    <Typography fontSize="46px" fontWeight={600} fontFamily="Josefin Sans" color="#EBE3CC" lineHeight="60px">
                    Making pet parenting easy for everyone
                    </Typography>
                    <Typography fontSize="22px" fontWeight={500} fontFamily="Josefin Sans" color="#EBE3CC" textAlign="start" lineHeight="34px">
                    Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence
                    </Typography>
                    <Stack direction="column" >
                        <Stack direction="row" gap={1}>
                        <Box  sx={{width:"10px",height:"10px",backgroundColor:"#062D3E",borderRadius:50,mt:"10px"}}/>
                    <Typography fontSize="22px" fontWeight={500} fontFamily="Josefin Sans" color="#EBE3CC" textAlign="start" lineHeight="34px">
                        Adoption  
                    </Typography>
                        </Stack>
                        <Stack direction="row" gap={1}>
                        
                    <Box  sx={{width:"10px",height:"10px",backgroundColor:"#062D3E",borderRadius:50,mt:"10px"}}/>
                    <Typography fontSize="22px" fontWeight={500} fontFamily="Josefin Sans" color="#EBE3CC" textAlign="start" lineHeight="34px">
                        Frozen Raw
                    </Typography>
                    </Stack>
                    <Stack direction="row" gap={1}>
                    <Box  sx={{width:"10px",height:"10px",backgroundColor:"#062D3E",borderRadius:50,mt:"10px"}}/>
                    <Typography fontSize="22px" fontWeight={500} fontFamily="Josefin Sans" color="#EBE3CC" textAlign="start" lineHeight="34px">
                        Next Day Delivery
                    </Typography>
                    </Stack>
                    </Stack>
                    
                    <Box sx={{justifyContent:"flex-start"}}>
                <Button  sx={{borderRadius:50,textTransform:'none',backgroundColor:"#062D3E",color:'#FFFFFF'}}>
                <Typography  fontSize='20px' fontWeight={500} p={1}>
                    Explore
                </Typography>
                </Button>
                </Box>
                    </Stack>
                    
                </Stack>
                <Box component="img" src={Group} sx={{position:"absolute", bottom:1, right:0}}/>


            </Box>
            </Stack>
    )
};
