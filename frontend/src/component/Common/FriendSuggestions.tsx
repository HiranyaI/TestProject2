import { Avatar, Button, Card, CardActions, Divider, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/pages/friendsPage.module.css'
import { useNavigate } from 'react-router-dom';

export default function FriendSuggestions() {

    const Navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>
        <Typography className={Styles.friendName} style={{fontSize: '24px', fontWeight: 900, color: '#252525'}}>
            Friend Suggestions
        </Typography>

        <ListItem style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}} >

        <Stack direction="row" spacing={2} >
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/bJVGmxJ/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg"
            sx={{
              height:'55px',
              width:'55px'
            }}/>

            <Stack >
            <Typography style={{fontWeight:700, fontSize:'18px'}}>
                ABC Silva
            </Typography>

            <Stack direction='row' spacing={1}>
                <Button variant="contained" className={Styles.friedSuggFollowBtn}
                sx={{background:'#195eeb',
                color:'white',
                textTransform:'capitalize',
                boxShadow:'none',
                height:'30px'
                }}>
                    Follow
                </Button>

                <Button variant="contained" className={Styles.friedSuggRemoveBtn}
                sx={{background:'#eeeeee',
                color:'#252525',
                textTransform:'capitalize',
                boxShadow:'none',
                height:'30px'
                }}>
                    Remove
                </Button>

            </Stack>
        </Stack>


        </Stack>

       


        </ListItem>

        <ListItem style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}} >

        <Stack direction="row" spacing={2} >
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/KsCknYb/download.jpg"
            sx={{
              height:'55px',
              width:'55px'
            }}/>

            <Stack >
            <Typography style={{fontWeight:700, fontSize:'18px'}}>
                ABC Silva
            </Typography>

            <Stack direction='row' spacing={1}>
                <Button variant="contained" className={Styles.friedSuggFollowBtn}
                sx={{background:'#195eeb',
                color:'white',
                textTransform:'capitalize',
                boxShadow:'none',
                height:'30px'
                }}>
                    Follow
                </Button>

                <Button variant="contained" className={Styles.friedSuggRemoveBtn}
                sx={{background:'#eeeeee',
                color:'#252525',
                textTransform:'capitalize',
                boxShadow:'none',
                height:'30px'
                }}>
                    Remove
                </Button>

            </Stack>
        </Stack>


        </Stack>

       


        </ListItem>

        <ListItem style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}} >

        <Stack direction="row" spacing={2} >
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/T0L71dk/images.jpg"
            sx={{
              height:'55px',
              width:'55px'
            }}/>

            <Stack >
            <Typography style={{fontWeight:700, fontSize:'18px'}}>
                ABC Silva
            </Typography>

            <Stack direction='row' spacing={1}>
                <Button variant="contained" className={Styles.friedSuggFollowBtn}
                sx={{background:'#195eeb',
                color:'white',
                textTransform:'capitalize',
                boxShadow:'none',
                height:'30px'
                }}>
                    Follow
                </Button>

                <Button variant="contained" className={Styles.friedSuggRemoveBtn}
                sx={{background:'#eeeeee',
                color:'#252525',
                textTransform:'capitalize',
                boxShadow:'none',
                height:'30px'
                }}>
                    Remove
                </Button>

            </Stack>
        </Stack>


        </Stack>

       


        </ListItem>

      <Divider/>

      <CardActions style={{justifyContent: 'center'}}>

        <Button variant="text" className={Styles.friendsCardButton} onClick={()=> Navigate("/people")}>
          <Typography className={Styles.chatCardButtonTxt} 
          style={{fontWeight: '600', color: '#195eeb'}}
                >See all friends</Typography>
        </Button>

      </CardActions>
    

    </Card>
  )
}
