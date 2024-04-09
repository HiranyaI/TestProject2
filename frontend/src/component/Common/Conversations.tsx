import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Conversations() {
  return (
    <>
    <Box p={1}>
        <Stack direction='row' justifyContent={'left'} sx={{marginLeft:'15px'}}>
            <Avatar sx={{width:'25px',height:'25px'}}/>
            <Box p={1} sx={{ background: '#eeeeee', borderRadius: 1.5, width: 'max-content', marginLeft:'10px' }}>
                <Typography variant='body2' color='#252525'>
                    Hi hello!
                </Typography>
            </Box>
        </Stack>
    </Box>

    <Box p={1}>
        <Stack direction='row' justifyContent={'right'} sx={{marginRight:'15px'}}>
            <Box p={1} sx={{ background: '#195eeb', borderRadius: 1.5, width: 'max-content', marginRight:'10px' }}>
                <Typography variant='body2' color='white'>
                    Hi hello!
                </Typography>
            </Box>
            <Avatar sx={{width:'25px',height:'25px'}}/>
        </Stack>
    </Box>
    
    </>
  )
}
