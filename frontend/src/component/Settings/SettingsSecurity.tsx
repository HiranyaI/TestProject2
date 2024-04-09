import { Typography, Divider, Avatar, List, ListItemButton, Stack, Button } from '@mui/material'
import React, { useState } from 'react';
import Styles from '../../styles/pages/settings.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorIcon from '@mui/icons-material/Error';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SecurityChangePasswordModal from './SecurityChangePasswordModal';
import SecurityVeriModal from './SecurityVeriModal';
import SecurityVeriEmailModal from './SecurityVeriEmailModal';
import SecurityVeriPhoneModal from './SecurityVeriPhoneModal';


export default function SettingsSecurity() {

    const[isSecurityChangePasswordModalOpen, setSecurityChangePasswordModalOpen]= useState(false);
    const[isSecurityVeriModalOpen, setSecurityVeriModalOpen]= useState(false);
    const[isSecurityVeriEmailModalOpen, setSecurityVeriEmailModalOpen]= useState(false);
    const[isSecurityVeriPhoneModalOpen, setSecurityVeriPhoneModalOpen]=useState(false);

    const handleOpenSecurityChangePasswordModal =()=>{
        setSecurityChangePasswordModalOpen(true);
    }
    const handleCloseSecurityChangePasswordModal=()=>{
        setSecurityChangePasswordModalOpen(false);
    }

    const handleOpenSecurityVeriModal=()=>{
        setSecurityVeriModalOpen(true);
    }
    const handleCloseSecurityVeriModal=()=>{
        setSecurityVeriModalOpen(false);
    }

    const handleOpenSecurityVeriEmailModal=()=>{
        setSecurityVeriEmailModalOpen(true);
    }
    const handleCloseSecurityVeriEmailModal=()=>{
        setSecurityVeriEmailModalOpen(false);
    }

    const handleOpenSecurityVeriPhoneModal=()=>{
        setSecurityVeriPhoneModalOpen(true);
    }
    const handleCloseSecurityVeriPhoneModal=()=>{
        setSecurityVeriPhoneModalOpen(false);
    }


  return (
    <>
    <Typography sx={{ textAlign: 'center', fontSize: '23px', fontWeight: 700, marginTop: '25px', color: '#252525' }}>
        Password And Security
      </Typography>
      
      <Divider sx={{marginTop:'15px', marginBottom:'15px'}} />

      <Typography sx={{color:'#252525', fontSize:'18px', fontWeight:500}}>
        Password
      </Typography>

        <List className={Styles.listPassword}>
                  <ListItemButton onClick={handleOpenSecurityChangePasswordModal}>
                      <div className={Styles.settingsListLeft} >
                          <Typography>Change password</Typography>
                      </div>
                      <div className={Styles.settingsListCenter} >
                          <Typography>*********</Typography>
                      </div>
                      <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex",  color:'#b2b2b2'}}>
                          <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                      </div>
                  </ListItemButton>
        </List>

      <Divider sx={{marginTop:'15px', marginBottom:'15px'}} />

      <Typography sx={{color:'#252525', fontSize:'18px', fontWeight:500}}>
        Security
      </Typography>

        <List className={Styles.listSecurity}>
                  <ListItemButton onClick={handleOpenSecurityVeriModal}>
                      <div className={Styles.settingsListLeft} >
                          <Typography>2-Step verification</Typography>
                      </div>
                      <div className={Styles.settingsListCenter} >
                        <Stack direction='row' spacing={2}>
                          <CheckCircleIcon sx={{
                            color:'#00bb4c'
                          }}/>
                          <Typography>2-Step Verification is ON</Typography>
                        </Stack>                    
                      </div>
                      <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex",  color:'#b2b2b2'}}>
                          <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                      </div>
                  </ListItemButton>

                  <ListItemButton onClick={handleOpenSecurityVeriEmailModal}>
                      <div className={Styles.settingsListLeft} >
                          <Typography>2-Step verification email</Typography>
                      </div>
                      <div className={Styles.settingsListCenter} >
                          <Typography>someone@gmail.com</Typography>                    
                      </div>
                      <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex",  color:'#b2b2b2'}}>
                          <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                      </div>
                  </ListItemButton>

                  <ListItemButton onClick={handleOpenSecurityVeriPhoneModal}>
                      <div className={Styles.settingsListLeft} >
                          <Typography>2-Step verification phone</Typography>
                      </div>
                      <div className={Styles.settingsListCenter} >                    
                          <Typography>+94 00 123 4567</Typography>                  
                      </div>
                      <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex",  color:'#b2b2b2'}}>
                          <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                      </div>
                  </ListItemButton>
        </List>

        <Divider sx={{marginTop:'15px', marginBottom:'15px'}} />

        <Typography sx={{color:'#252525', fontSize:'18px', fontWeight:500}}>
            Looking for something else
        </Typography>

        <List className={Styles.listReport}>
            <Stack direction='column'>
                <Button startIcon={<ErrorIcon />} style={{textTransform:'capitalize', color:'#3e3e3e', width: 'max-content'}}>
                    Reporting problems
                </Button>
                <Button startIcon={<FeedbackIcon />} style={{textTransform:'capitalize', color:'#3e3e3e', width: 'max-content'}}>
                    Reporting problems
                </Button>
            </Stack>
            
        </List>

        <SecurityChangePasswordModal
        open={isSecurityChangePasswordModalOpen}
        onClose={handleCloseSecurityChangePasswordModal} />

        <SecurityVeriModal 
        open={isSecurityVeriModalOpen}
        onClose={handleCloseSecurityVeriModal}/>

        <SecurityVeriEmailModal
        open={isSecurityVeriEmailModalOpen}
        onClose={handleCloseSecurityVeriEmailModal} />

        <SecurityVeriPhoneModal 
        open={isSecurityVeriPhoneModalOpen}
        onClose={handleCloseSecurityVeriPhoneModal}/>

    </>
  )
}
