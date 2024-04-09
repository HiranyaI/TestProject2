import { Grid, Card, Stack, Typography, Button, Chip, ListItemButton, ListItemAvatar, Avatar, IconButton, List, ListItem, ListItemText, styled, ListItemIcon, Box, Paper, CardContent } from '@mui/material'
import React, { useState } from 'react'
import Styles from '../../styles/pages/people.module.css';
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AllFriendsModal from '../../component/Common/AllFriendsModal';

export default function People() {


  const [isAllFriendsModalOpen, setAllFriendsModalOpen] = useState(false);

  const handleOpenAllFriendsModal = () => {
    setAllFriendsModalOpen(true);
  };

  const handleCloseAllFriendsModal = () => {
    setAllFriendsModalOpen(false);
  };
  

  return (
    <>

    <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={Styles.friendsMenuLeft}>

          <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>

            <Typography className={Styles.friendsCardName} style={{fontSize: '25px', fontWeight: 900, color: '#252525'}}>
                Friends
            </Typography>

            <Stack direction="column" >
                <Button className={Styles.friendsMenuBtn}
                size="large" variant="text" startIcon={<PeopleIcon style={{fontSize:'25px'}}/>} 

                style={{
                  justifyContent: "flex-start",
                  borderRadius:10}}
                  onClick={handleOpenAllFriendsModal}>
                    All Friends
                </Button>

                <Button className={Styles.friendsMenuBtn} size="large" variant="text" startIcon={<GroupAddIcon />} 
                style={{
                  justifyContent: "flex-start",
                  borderRadius:10}}>
                    Friend Request
                </Button> 

                <Button className={Styles.friendsMenuBtn} size="large" variant="text" startIcon={<AddCircleIcon />} 
                style={{
                  justifyContent: "flex-start",
                  borderRadius:10}}>
                    Suggestions
                </Button>

            </Stack>

          </Card>
            
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={Styles.friendsMenuRightGrid}>
          <div className={Styles.friendsMenuRight}>

          <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>

            <Typography className={Styles.friendsCardName} style={{fontSize: '25px', fontWeight: 900, color: '#252525'}}>
              Friend Requests and Invitation
            </Typography>  

            {/* SAMPLE FRIEND REQUESTS AND INVITATIONS */}

            <List>

              <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt='jhg'
                    src='https://i.ibb.co/0XF6p6b/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg'
                  />
                  </ListItemAvatar>

                  <ListItemText>
                  <b>Andrew Silvester</b> send a friend request to you
                  </ListItemText>

                  <Stack spacing={1} direction="row">
                    <Button variant="outlined" className={Styles.friendsActionBtnFollow}
                    style={{
                      color:'#195eeb',
                      fontWeight:600,
                      borderWidth:2,
                      borderColor:'#195eeb'
                    }}
                    >Follow</Button>

                    <Button variant="text" className={Styles.friendsActionBtnIgnore}
                    style={{
                      color:'#797979',
                      fontWeight:100
                    }}>Ignore</Button>
                  </Stack>
              </ListItem>

              <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt='jhg'
                    src='https://i.ibb.co/svPD1gd/download.jpg'
                  />
                  </ListItemAvatar>

                  <ListItemText>
                  <b>John Watson</b> invite to follow <b>Apple</b>
                  </ListItemText>

                  <Stack spacing={1} direction="row">
                    <Button variant="outlined" className={Styles.friendsActionBtnFollow}
                    style={{
                      color:'#195eeb',
                      fontWeight:600,
                      borderWidth:2,
                      borderColor:'#195eeb'
                    }}
                    >Follow</Button>

                    <Button variant="text" className={Styles.friendsActionBtnIgnore}
                    style={{
                      color:'#797979',
                      fontWeight:100
                    }}>Ignore</Button>
                  </Stack>
              </ListItem>

              <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt='jhg'
                    src='https://i.ibb.co/KzKvtMT/images.jpg'
                  />
                  </ListItemAvatar>

                  <ListItemText>
                  <b>Andrew Clients</b> invite to follow <b>R Constructions</b>
                  </ListItemText>

                  <Stack spacing={1} direction="row">
                    <Button variant="outlined" className={Styles.friendsActionBtnFollow}
                    style={{
                      color:'#195eeb',
                      fontWeight:600,
                      borderWidth:2,
                      borderColor:'#195eeb'
                    }}
                    >Follow</Button>

                    <Button variant="text" className={Styles.friendsActionBtnIgnore}
                    style={{
                      color:'#797979',
                      fontWeight:100
                    }}>Ignore</Button>
                  </Stack>
              </ListItem>

            </List>

            {/* END SAMPLE FRIEND REQUESTS AND INVITATIONS */}


          </Card>

          <Box sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px', backgroundColor:'white', display:'column' }}>

            <Typography className={Styles.friendsCardName} style={{fontSize: '25px', fontWeight: 900, color: '#252525'}}>
              Friend Suggestions
            </Typography>  

            
            <Box sx={{ flexGrow: 1 }}>

              {/* SAMPLE FRIEND SUGGESTIONS */}

              <Grid container spacing={'auto'}>

                <Grid xs={6} sm={6} md={4} lg={4}>
                <Card style={{margin:'10px', boxShadow:'none', backgroundColor:'#F4F8FF'}}>
                    <CardContent style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>

                      <Avatar alt="Remy Sharp" src="https://i.ibb.co/ZJ31fQB/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg"                 
                        style={{
                          width:'90px',
                          height:'90px',
                          margin:'auto'
                          }}/>

                        <Typography sx={{fontWeight:700}}>
                          ABC Silva
                        </Typography>

                        <Button variant="outlined" className={Styles.friendsActionBtnFollow}
                          style={{
                            color:'#195eeb',
                            fontWeight:600,
                            borderWidth:2,
                            borderColor:'#195eeb',
                            marginTop:'12px'
                          }}
                          >Follow</Button>
                    </CardContent>
                </Card>
                </Grid>
                
                <Grid xs={6} sm={6} md={4} lg={4}>
                <Card style={{margin:'10px', boxShadow:'none', backgroundColor:'#F4F8FF'}}>
                    <CardContent style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>

                      <Avatar alt="Remy Sharp" src="https://i.ibb.co/KzKvtMT/images.jpg"                 
                        style={{
                          width:'90px',
                          height:'90px',
                          margin:'auto'
                          }}/>

                        <Typography sx={{fontWeight:700}}>
                          Andrew Weston
                        </Typography>

                        <Button variant="outlined" className={Styles.friendsActionBtnFollow}
                          style={{
                            color:'#195eeb',
                            fontWeight:600,
                            borderWidth:2,
                            borderColor:'#195eeb',
                            marginTop:'12px'
                          }}
                          >Follow</Button>
                    </CardContent>
                </Card>
                </Grid>

                <Grid xs={6} sm={6} md={4} lg={4}>
                <Card style={{margin:'10px', boxShadow:'none', backgroundColor:'#F4F8FF'}}>
                    <CardContent style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>

                      <Avatar alt="Remy Sharp" src="https://i.ibb.co/svPD1gd/download.jpg"                 
                        style={{
                          width:'90px',
                          height:'90px',
                          margin:'auto'
                          }}/>

                        <Typography sx={{fontWeight:700}}>
                          Andrew Weston
                        </Typography>

                        <Button variant="outlined" className={Styles.friendsActionBtnFollow}
                          style={{
                            color:'#195eeb',
                            fontWeight:600,
                            borderWidth:2,
                            borderColor:'#195eeb',
                            marginTop:'12px'
                          }}
                          >Follow</Button>
                    </CardContent>
                </Card>
                </Grid>

              </Grid>

              {/* END - SAMPLE FRIEND SUGGESTIONS */}

            </Box>

          </Box>
            
          </div>
        </Grid>


        <AllFriendsModal
          open={isAllFriendsModalOpen}
          onClose={handleCloseAllFriendsModal}
        />
        
      </Grid>


     
    </>


  )
}
