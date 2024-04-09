import { Card, CardMedia, CardContent, Button, Typography, Stack, Grid } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'
import Posts from '../../component/Common/Posts'
import Styles from '../../styles/pages/friendsPage.module.css'
import FriendSuggestions from '../../component/Common/FriendSuggestions'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MessageIcon from '@mui/icons-material/Message';

export default function FriendsPage() {
  return (
    <>
    
    {/* <TopNav /> */}

    <Card sx={{maxHeight: '450px', boxShadow:'none', borderRadius: '0px 0px 15px 15px'}}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="228"
        image="https://i.ibb.co/mzkk30F/details-bg-17e577624f4b98db58f5.webp"
        className={Styles.coverImg}
      />
     <CardMedia
        component="img"
        alt="green iguana"
        image="https://i.ibb.co/VvyFzQL/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg"
        className={Styles.profileImg}
        style={{maxHeight: '150px', maxWidth: '150px'}}
      /> 

      <CardContent>

        <Stack direction='row' spacing={2} sx={{justifyContent: "flex-end" }} >
          <Button variant="contained" startIcon={<GroupAddIcon />} className={Styles.friendFollowBtn}>
            Follow
          </Button>
           
          <Button variant="contained" startIcon={<MessageIcon />} className={Styles.friendMessageBtn}>
            Messages 
          </Button>

        </Stack>

        <Typography variant="h5" component="div" style={{textAlign: 'left', marginTop: '40px', fontWeight: 700}}>
          ABC Silva
        </Typography>
        
        <Typography gutterBottom  style={{textAlign: 'left', fontWeight: 100}}>
          UI/UX Designer | Some bio here
        </Typography>

        <Stack direction="row" spacing={3} style={{color: '#195eeb'}} >
          
          <Typography   style={{textAlign: 'left', fontWeight: 700}}>
            40 
            <span> posts</span>
          </Typography>

          
          <Typography   style={{textAlign: 'left', fontWeight: 700}}>
            450
            <span> followers</span>
          </Typography>

          
          <Typography   style={{textAlign: 'left', fontWeight: 700}}>
            200
            <span> following</span>
          </Typography>


        </Stack>

      </CardContent>

      
    </Card>

    <div className={Styles.feedContainer}>


      <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className={Styles.feedContainerLeft}>

              <Grid className={Styles.title_row}>
                        <Grid className="my-auto" item xs={12} sm={6} md={6} lg={6}>
                            <Typography className={Styles.heading} 
                            sx={{fontWeight:'800', 
                            textAlign:'left',
                            fontSize:'28px',
                            marginTop:'15px',
                            marginLeft:'15px'
                            }}>
                              Posts
                              </Typography>
                        </Grid>
              </Grid>


            <Posts />
          </div>
        </Grid>

        <Grid item md={4} lg={4} xl={4}>
          <div className={Styles.feedContainerRight}>
            <FriendSuggestions/>
          </div>
        </Grid>
        
      </Grid>



    </div>
    

    

    </>
  )
}
