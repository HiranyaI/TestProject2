import React from 'react'
import FriendsCard from '../../component/Common/FriendsCard'
import { Grid, Typography } from '@mui/material'
import ChatCard from '../../component/Common/ChatCard'
import CreatePost from '../../component/Common/CreatePost'
import Posts from '../../component/Common/Posts'
import Styles from '../../styles/pages/home.module.css';

export default function Home() {
  return (
    <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className={Styles.homefeedContainerLeft}>

            <CreatePost />
            <Posts />
            <Posts/>
            
          </div>
        </Grid>

        <Grid item md={4} lg={4} xl={4} className={Styles.homefeedContainerRightGrid}>
          <div className={Styles.homefeedContainerRight}>
            <FriendsCard/>  
            <ChatCard/>            
          </div>
        </Grid>
        
      </Grid>
  )
}
