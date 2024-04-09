import { Avatar, Box, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/component/messages.module.css';
import { Phone } from '@mui/icons-material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Conversations from './Conversations';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Messages() {
  const Navigate = useNavigate();

  return (
    <Stack height={650} maxHeight={'100vh'} width={'auto'} >
      
        {/* Chat Header */}
        <Box sx={{height: 65, width:'100%', background:'white', boxShadow:'0px 7px 5px 0px rgba(240,240,240,1)'}}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          sx={{ width: "100%", height: "100%" }}
          justifyContent="space-between">
          <Stack
            spacing={2}
            direction="row"
            sx={{marginLeft:'20px'}}
          >
            <IconButton onClick={()=>Navigate(0)}>
                <ArrowBackIosRoundedIcon />
            </IconButton>
                <Box>
                  <Avatar/>
                </Box>

                <Stack spacing={0.2}>
                <Typography variant="subtitle2">
                    Pasindu Matharage
                </Typography>
                <Typography variant="caption">Online</Typography>
                </Stack>

          </Stack>

          <Stack
            direction={"row"}
            alignItems="center"
            spacing={1}
            sx={{marginRight:'20px'}}
          >
            <IconButton sx={{color:'#195eeb'}}>
                <Phone />
            </IconButton>

            <IconButton sx={{color:'#195eeb'}}>
                <VideoCallIcon />
            </IconButton>
            
            <IconButton sx={{color:'#195eeb'}}>
                <AccountCircleIcon />
            </IconButton>
          </Stack>

        </Stack>


        </Box>

        {/* Chat Body */}
        <Box width={'100%'} sx={{flexGrow: 1 ,background:'white'}}>
          <Conversations />

        </Box>
    

        {/* Chat Footer */}
        <Box sx={{height: 65, width:'100%', background:'white' }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          sx={{ width: "100%", height: "100%" }}
          justifyContent="space-between"
        >
          <TextField className={`${Styles.MsgTexField} msgTypeTxtField`}
          placeholder="Write something here"
          
          sx={{marginLeft:'20px', background:'#eeeeee', borderRadius:'10px', width:'100%', height:'50px', "& fieldset": { border: 'none' } }}/>

          <Stack
            direction={"row"}
            alignItems="center"
            spacing={0}
            sx={{ marginRight:'20px' }}
          >
            <IconButton>
                <AttachFileIcon sx={{color:'#b2b2b2'}}/>
            </IconButton>

            <IconButton>
                <CameraAltOutlinedIcon sx={{color:'#b2b2b2'}}/>
            </IconButton>
            
            <IconButton>
                <InsertEmoticonOutlinedIcon sx={{color:'#b2b2b2'}}/>
            </IconButton>

            <IconButton className={Styles.msgSendBtn}>
                <SendRoundedIcon sx={{color:'white'}}/>
            </IconButton>
            
          </Stack>

        </Stack>

        </Box>
        
    </Stack>

  )
}
