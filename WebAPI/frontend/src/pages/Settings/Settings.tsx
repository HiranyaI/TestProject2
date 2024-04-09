import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import Styles from '../../styles/pages/settings.module.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsHome from '../../component/Settings/SettingsHome'
import SettingsPersonal from '../../component/Settings/SettingsPersonal'
import SettingsSecurity from '../../component/Settings/SettingsSecurity'


export default function Settings() {

    const [selectedSetting, setSelectedSetting] = useState('home');

    const isMobile = useMediaQuery('(max-width: 900px)');

    const handleSettingChange = (setting: React.SetStateAction<string>) => {
        setSelectedSetting(setting);
    };


  return (
    <div>
        <Box  sx={{background:'#195eeb'}}>
            <Stack p={1.5} direction='row' justifyContent='space-between' alignItems='center'>
                <Typography sx={{
                    fontSize:'20px',
                    color:'white',
                    fontWeight: 500
                }}>Settings</Typography>
                <Button variant='text' startIcon={<SaveIcon/>}
                sx={{color:'white', textTransform:'capitalize'}}>
                Save</Button>  
            </Stack>
        </Box>
        
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 7, sm: 2, md: 2 }}>

                <Grid item xs={2} sm={2} md={4} lg={4} xl={4}>
                    <div >
                        <Stack p={4} direction='column'>

                            <Button variant='text' startIcon={<HomeIcon className={Styles.settingsMenuIcons} />}
                            sx={{
                                color: selectedSetting === 'home' ? '#195eeb' : '#252525', 
                                textTransform:'capitalize', 
                                textAlign:'left', 
                                width: 'max-content',
                                fontSize:'15px',
                                fontWeight:500
                                }}
                                onClick={() => handleSettingChange('home')}
                                >
                                {isMobile ? null : 'Home'}
                            </Button>

                            <Button variant='text' startIcon={<AccountCircleIcon className={Styles.settingsMenuIcons} />}
                            sx={{
                                color: selectedSetting === 'personal' ? '#195eeb' : '#252525', 
                                textTransform:'capitalize', 
                                width: 'max-content',
                                fontSize:'15px',
                                fontWeight:500
                                }}
                                onClick={() => handleSettingChange('personal')}
                                >
                                {isMobile ? null : 'Personal info'}
                            </Button>

                            <Button variant='text' startIcon={<SecurityIcon className={Styles.settingsMenuIcons} />}
                            sx={{
                                color: selectedSetting === 'security' ? '#195eeb' : '#252525', 
                                textTransform:'capitalize', 
                                width: 'max-content',
                                fontSize:'15px',
                                fontWeight:500
                                }}
                                onClick={() => handleSettingChange('security')}
                                >
                                {isMobile ? null : 'Password and security'}
                            </Button>
                        </Stack>   
                    </div>
                </Grid>
            

                <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                    <div>
                        {selectedSetting === 'home' && <SettingsHome />}
                        {selectedSetting === 'personal' && <SettingsPersonal />}
                        {selectedSetting === 'security' && <SettingsSecurity />}
                    </div>
                </Grid>
        
            </Grid>

        </Box>


      



    </div>
  )
}
