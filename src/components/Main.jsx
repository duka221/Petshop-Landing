import { Box, Button, Stack, Typography } from "@mui/material"
import React from "react"
import dog1 from "../images/dog1.png"
import XM from "../images/XM.png"
import SwipeableTextStepper from "./Stepper"
import ResponsiveAppBar from "./Header"
import { Service } from "./Service"
import { Care } from "./Care"
import { Reviews } from "./Reviews"
export const Main = () => {
    return (
        <>
        <Stack display='flex' justifyContent='center' alignItems='center' sx={{minHeight:'100%',background:"linear-gradient(90deg, #EBE3CC 70%, #062D3E 30%)",margin: 0, padding: 0}}>
           <Box sx={{maxWidth:"lg", width: 1}}>
           <ResponsiveAppBar/>
            <Stack direction='row' justifyContent="space-between" width={1}>
                <Stack direction='column' >
                <Box>
                    <Stack direction='row' >
                    <Box component='img' src={XM}/>
                    <Typography color="#189CAB" fontSize="24px" fontWeight={500} fontFamily="Neue Montreal">
                    Available in select states
                    </Typography>
                    </Stack>
                   <Box>
                    <Typography fontSize='96px' fontWeight={700} lineHeight='92px' textTransform="uppercase" color="#062D3E" fontFamily='Josefin Sans'>
                    A pet-first <Typography fontSize='96px' fontWeight={700} lineHeight='92px' textTransform="uppercase" color="#ED5C01" fontFamily='Josefin Sans'> approach to </Typography> wellness
                    </Typography>
                   </Box>
                </Box>
                <Box sx={{justifyContent:"flex-start" , py:2}}>
                <Button  sx={{borderRadius:50,textTransform:'none',backgroundColor:"#ED5C01",color:'#FFFFFF',borderColor:"#FFFFFF"}}>
                <Typography  fontSize='15px' fontWeight={500} p={1}>
                    Learn More
                </Typography>
                </Button>
                </Box>
                
                </Stack>
                <Stack direction='column' >
                 <SwipeableTextStepper/>
                 </Stack>
            </Stack>
            </Box> 
        </Stack>
        <Service/>
        <Care/>
        <Reviews/>
        </>
        
        
    )
}