import { Typography, Divider, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'

export default function SettingsHome() {
  return (
    <>
      <Typography sx={{ textAlign: 'center', fontSize: '23px', fontWeight: 700, marginTop: '25px', color: '#252525' }}>
        Home
      </Typography>
      
      <Divider sx={{marginTop:'15px', marginBottom:'15px'}} />

      <Typography sx={{
        textAlign: 'center', 
        fontSize: '18px', 
        fontWeight: 400, 
 
        color: '#252525' }}>
          Welcome, User name
      </Typography>
      
      <Typography sx={{
        textAlign:'center',
        color:'#797979',
        fontSize:'13px'
      }}>
      Manage your info, privacy, and security to make <br /> ConnectX work better for you.
      </Typography>

      <Grid container spacing={2}>

        <Grid item xs={6}>
          <Card sx={{
          display: 'flex',
          maxWidth: 345,
          boxShadow:'none',
          margin:'15px' }}>
            <CardActionArea>
              <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/Z15BpWT/custermize-01.png"
              alt="green iguana"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Privacy and personalization
                </Typography>
                <Typography variant="body2" color="text.secondary">
                See data in your ConnectX account and personalize your account
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{
          display: 'flex',
          maxWidth: 345,
          boxShadow:'none',
          margin:'15px' }}>
            <CardActionArea>
              <CardMedia
              component="img"
              height="140"
              image="https://i.ibb.co/sV4P9D6/security-01.png"
              alt="green iguana"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Your account security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                See your ConnectX account security here and get actions to secure your account
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        
      </Grid>

      
      

    </>
  )
}
