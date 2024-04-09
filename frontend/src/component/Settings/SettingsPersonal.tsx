import { Button, Divider, Stack, Typography, Avatar, List, ListItem, ListItemText, IconButton, ListItemButton, ListItemIcon, Grid } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Styles from '../../styles/pages/settings.module.css';
import ErrorIcon from '@mui/icons-material/Error';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ProfilePicModal from '../../component/Settings/ProfilePicModal';
import ProfileNameModal from './ProfileNameModal';
import ProfileBirthModal from './ProfileBirthModal';
import ProfileGenderModal from './ProfileGenderModal';
import ProfileEmailModal from './ProfileEmailModal';
import ProfilePhoneModal from './ProfilePhoneModal';

export default function SettingsPersonal() {

  const [isProfilePicModalOpen, setProfilePicModalOpen] = useState(false);
  const [isProfileNameModalOpen, setProfileNameModalOpen ] = useState (false);
  const [isProfileBirthModalOpen, setProfileBirthModalOpen] =useState (false);
  const [isProfileGenderModalOpen, setProfileGenderModalOpen] = useState (false);
  const [isProfileEmailModalOpen, setProfileEmailModalOpen] = useState (false);
  const [isProfilePhoneModalOpen, setProfilePhoneModalOpen] = useState (false);

    const handleOpenProfilePicModal = () => {
        setProfilePicModalOpen(true);
    }
    const handleCloseProfilePicModal =() => {
        setProfilePicModalOpen(false);
    }

    const handleOpenProfileNameModal = () => {
      setProfileNameModalOpen(true);
    }
    const handleCloseProfileNameModal = () => {
      setProfileNameModalOpen(false);
    }

    const handleOpenProfileBirthModal = () => {
      setProfileBirthModalOpen(true);
    }
    const handleCloseProfileBirthModal = () => {
      setProfileBirthModalOpen(false);
    }

    const handleOpenProfileGenderModal = () => {
      setProfileGenderModalOpen(true);
    }
    const handleCloseProfileGenderModal =() => {
      setProfileGenderModalOpen(false);
    }

    const handleOpenProfileEmailModal = () => {
        setProfileEmailModalOpen(true);
    }
    const handleCloseProfileEmailModal = () => {
        setProfileEmailModalOpen(false);
    }

    const handleOpenProfilePhoneModal = () => {
        setProfilePhoneModalOpen(true);
    }
    const handleCloseProfilePhoneModal = () =>{
        setProfilePhoneModalOpen(false);
    }




  return (
    <>
    
    
        <Typography sx={{ textAlign: 'center', fontSize: '23px', fontWeight: 700, marginTop: '25px', color: '#252525' }}>
            Personal Info
        </Typography>

        
        <Divider sx={{marginTop:'15px', marginBottom:'15px'}} />


        <Typography sx={{color:'#252525', fontSize:'18px', fontWeight:500}}>
            Basic Info
        </Typography>

            <List className={Styles.listBasicInfo}>
                <ListItemButton onClick={handleOpenProfilePicModal}>
                    <div className={Styles.settingsListLeft} >
                        <Typography>Profile picture</Typography>
                    </div>
                    <div className={Styles.settingsListCenter} >
                        <Typography>You can edit your profile picture</Typography>
                    </div>
                    <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex"}}>
                        <Avatar />
                    </div>
                </ListItemButton>

                <ListItemButton onClick={handleOpenProfileNameModal}>
                    <div className={Styles.settingsListLeft} >
                        <Typography>Name</Typography>
                    </div>
                    <div className={Styles.settingsListCenter} >
                        <Typography>Pasindu Matharage</Typography>
                    </div>
                    <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex", color:'#b2b2b2'}}>
                        <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                    </div>
                </ListItemButton>

                <ListItemButton onClick={handleOpenProfileBirthModal}>
                    <div className={Styles.settingsListLeft} >
                        <Typography>Birthday</Typography>
                    </div>
                    <div className={Styles.settingsListCenter} >
                        <Typography>Jan 01, 1900</Typography>
                    </div>
                    <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex", color:'#b2b2b2'}}>
                        <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                    </div>
                </ListItemButton>

                <ListItemButton onClick={handleOpenProfileGenderModal}>
                    <div className={Styles.settingsListLeft} >
                        <Typography>Gendre</Typography>
                    </div>
                    <div className={Styles.settingsListCenter} >
                        <Typography>Male</Typography>
                    </div>
                    <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex", color:'#b2b2b2'}}>
                        <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                    </div>
                </ListItemButton>

            </List>


        <Divider sx={{marginTop:'15px', marginBottom:'15px'}} />
        

        <Typography sx={{color:'#252525', fontSize:'18px', fontWeight:500}}>
            Contact Info
        </Typography>

        <List className={Styles.listContactInfo}>
            <ListItemButton onClick={handleOpenProfileEmailModal}>
                        <div className={Styles.settingsListLeft} >
                            <Typography>Email</Typography>
                        </div>
                        <div className={Styles.settingsListCenter} >
                            <Typography>someone@gmail.com</Typography>
                        </div>
                        <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex",  color:'#b2b2b2'}}>
                            <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                        </div>
            </ListItemButton>

            <ListItemButton onClick={handleOpenProfilePhoneModal}>
                        <div className={Styles.settingsListLeft} >
                            <Typography>Phone</Typography>
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
            Genaral perferences
        </Typography>

        <List className={Styles.listGenaralPerferences}>
            <ListItemButton>
                        <div className={Styles.settingsListLeft} >
                            <Typography>Language</Typography>
                        </div>
                        <div className={Styles.settingsListCenter} >
                            <Typography>English (United State)</Typography>
                        </div>
                        <div className={Styles.settingsListRight} style={{justifyContent: "right", display: "flex",  color:'#b2b2b2'}}>
                            <ArrowForwardIosIcon style={{fontSize:'20px'}}/>
                        </div>
            </ListItemButton>

            <ListItemButton>
                        <div className={Styles.settingsListLeft} >
                            <Typography>Input tools</Typography>
                        </div>
                        <div className={Styles.settingsListCenter} >
                            <Typography>Type more easily in your  language</Typography>
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

        <ProfilePicModal 
        open={isProfilePicModalOpen}
        onClose={handleCloseProfilePicModal}        
        />

        <ProfileNameModal
        open={isProfileNameModalOpen}
        onClose={handleCloseProfileNameModal} />

        <ProfileBirthModal
        open={isProfileBirthModalOpen}
        onClose={handleCloseProfileBirthModal} />

        <ProfileGenderModal
        open={isProfileGenderModalOpen} 
        onClose={handleCloseProfileGenderModal} />

        <ProfileEmailModal
        open={isProfileEmailModalOpen}
        onClose={handleCloseProfileEmailModal} />

        <ProfilePhoneModal
        open={isProfilePhoneModalOpen}
        onClose={handleCloseProfilePhoneModal} />

    

    </>
  )
}
