import React, { useState } from 'react'
import TopNav from '../../component/TopNav/TopNav'
import Posts from '../../component/Common/Posts'
import Styles from '../../styles/pages/profile.module.css'
import CreatePost from '../../component/Common/CreatePost'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { Style } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit';
import { relative } from 'path'
import ChatCard from '../../component/Common/ChatCard'
import Settings from '../Settings/Settings'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const Navigate = useNavigate();
  

  return (
    <>
    
    {/* <TopNav /> */}

    <Card sx={{maxHeight: '450px', boxShadow:'none', borderRadius: '0px 0px 15px 15px'}}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="228"
        image="https://i.ibb.co/F8CGJMs/amenity-bg-b90ce6d4a8eb511e42be.jpg"
        className={Styles.coverImg}
      />
     <CardMedia
        component="img"
        alt="green iguana"
        image="https://i.ibb.co/P4KZL4X/456322.png"
        className={Styles.profileImg}
        style={{maxHeight: '150px', maxWidth: '150px'}}
      /> 

      <CardContent>

        <Stack>
          <Button startIcon={<EditIcon style={{fontSize: '20px'}}/>} className={Styles.profileEdit}
          onClick={()=> Navigate("/settings")}>
            Edit profile
          </Button>
        </Stack>

        <Typography variant="h5" component="div" style={{textAlign: 'left', marginTop: '40px', fontWeight: 700}}>
          Pasindu Matharage
        </Typography>
        
        <Typography gutterBottom  style={{textAlign: 'left', fontWeight: 100}}>
          CEO ABC Companies | Some bio here
        </Typography>

        <Stack direction="row" spacing={3} style={{color: '#195eeb'}} >
          
          <Typography   style={{textAlign: 'left', fontWeight: 700}}>
            450 
            <span> posts</span>
          </Typography>

          
          <Typography   style={{textAlign: 'left', fontWeight: 700}}>
            1450
            <span> followers</span>
          </Typography>

          
          <Typography   style={{textAlign: 'left', fontWeight: 700}}>
            2000
            <span> following</span>
          </Typography>


        </Stack>

      </CardContent>

      
    </Card>

    <div className={Styles.feedContainer}>


      <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className={Styles.feedContainerLeft}>
            <CreatePost />

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
            <ChatCard/>              
          </div>
        </Grid>
        
      </Grid>



    </div>
    

    

    </>
  )
}

