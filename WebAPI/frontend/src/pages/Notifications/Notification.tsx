import { Avatar, Button, Card, Chip, Grid, IconButton, ListItemAvatar, ListItemButton, Stack, Typography } from '@mui/material'
import React from 'react'

import SettingsIcon from '@mui/icons-material/Settings';
import Styles from '../../styles/pages/notification.module.css'

export default function Notification() {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>

      <Grid item xs={12} md={4} lg={4} xl={4}>
          <div className={Styles.feedContainerLeft}>

          <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }} className={Styles.notificationCardLeft}>
            <Stack direction="row" spacing={'auto'} sx={{ margin:'20px', alignItems:'baseline'}}>

              <div className={Styles.notificationCardName}>
                <Typography style={{fontSize: '16px', fontWeight: 700, color: '#252525'}} className={Styles.leftCardName}>
                  Manage your notifications
                </Typography>
              </div>

              <div className={Styles.notificationMoreIcon}>
              <IconButton style={{color: '#252525', position:'relative', alignItems:'left'}} className={Styles.leftCardIcon}>
                  <SettingsIcon className={Styles.leftCardIcon}/>
                </IconButton> 
              </div>
            </Stack>
          </Card>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className={Styles.feedContainerRight}>

          <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }} className={Styles.notificationCardRight}>

          <Stack direction="row" spacing={'auto'} sx={{ margin:'20px', alignItems:'baseline'}}>
            <div className={Styles.notificationName}>
              <Typography style={{fontSize: '25px', fontWeight: 900, color: '#252525'}}>
                Notifications
              </Typography>
            </div>

            <div className={Styles.notificationClear}>
            <Button className={Styles.notiClearBtn}>Mark all as read</Button>
            </div>
            </Stack>

            <Stack direction="row" spacing={2} sx={{margin:'20px'}}>
              <Chip className={Styles.notifiChips}
              sx={{
                backgroundColor:'#195eeb',
                color:'white',
                fontSize:'15px',

              }} 
              label="All" onClick={handleClick} />
              <Chip label="My posts" variant="outlined" onClick={handleClick} />
              <Chip label="Mentions" variant="outlined" onClick={handleClick} />
            </Stack>

            {/* SAMPLE NOTIFICATIONS */}

            <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px', marginRight:'25px', marginLeft:'25px', backgroundColor: '#F3F7FE'}}>
              <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/0XF6p6b/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg'
                />

                </ListItemAvatar>
                  <div className={Styles.NamenMsg}>
                    <Typography style={{fontWeight:500, fontSize:'16px'}}>
                    Mark Robert react to your recent post
                    </Typography>
                    <Typography style={{fontSize:'12px'}}>
                    1m a long
                    </Typography>
                  </div>
            </ListItemButton>

            <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px', marginRight:'25px', marginLeft:'25px', backgroundColor: '#F3F7FE'}}>
              <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/MSfdsDG/images.jpg'
                />

                </ListItemAvatar>
                  <div className={Styles.NamenMsg}>
                    <Typography style={{fontWeight:500, fontSize:'16px'}}>
                    Chris Silverwood followed you
                    </Typography>
                    <Typography style={{fontSize:'12px'}}>
                    1m a long
                    </Typography>
                  </div>
            </ListItemButton>

            <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px', marginRight:'25px', marginLeft:'25px'}}>
              <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/bzPDRh2/download.jpg'
                />

                </ListItemAvatar>
                  <div className={Styles.NamenMsg}>
                    <Typography style={{fontWeight:500, fontSize:'16px'}}>
                    Livini Wotsan and others have add 3 comments on ABC post
                    </Typography>
                    <Typography style={{fontSize:'12px'}}>
                    1m a long
                    </Typography>
                  </div>
            </ListItemButton>

            <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px', marginRight:'25px', marginLeft:'25px'}}>
              <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/3d84vRt/images-1.jpg'
                />

                </ListItemAvatar>
                  <div className={Styles.NamenMsg}>
                    <Typography style={{fontWeight:500, fontSize:'16px'}}>
                    Arjun Sri and others have add 3 comments on Zamms post
                    </Typography>
                    <Typography style={{fontSize:'12px'}}>
                    1m a long
                    </Typography>
                  </div>
            </ListItemButton>

            {/* END SAMPLE NOTIFICATIONS */}
            
          </Card>
            
          </div>
        </Grid>
        
      </Grid>
  )
}
