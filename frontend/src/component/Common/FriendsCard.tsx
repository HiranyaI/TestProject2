import { Search } from '@mui/icons-material'
import { Card, Stack, Typography, IconButton, Avatar, Divider, CardActions, Button, Badge, styled, ListItemAvatar, ListItemButton } from '@mui/material'
import React from 'react';
import Styles from '../../styles/component/friendscard.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

export default function FriendsCard() {

  const Navigate = useNavigate();
  
  return (
    <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>

      <Stack direction="row" spacing={'auto'} sx={{ marginTop:'20px',marginLeft:'20px', marginRight:'20px', marginBottom:'15px'}}>

        <div className={Styles.friendsCardName}>
          <Typography style={{fontSize: '24px', fontWeight: 900, color: '#252525'}}>
            Friends
          </Typography>
        </div>

        <div className={Styles.moreFriendsIcon}>
        <IconButton aria-label="start chat" style={{color: '#252525', position:'relative', alignItems:'left'}}>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </Stack>     

      <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}} onClick={()=> Navigate("/friendPage")}>

        <Stack direction="row" spacing={2}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/bJVGmxJ/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg" />
        </StyledBadge>
        </Stack>

            <div className={Styles.friendName}>
              <Typography style={{fontWeight:700, fontSize:'18px'}}>
                ABC Silva
              </Typography>
            </div>

      </ListItemButton>

      <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}}>

        <Stack direction="row" spacing={2}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/MSfdsDG/images.jpg" />
        </StyledBadge>
        </Stack>

            <div className={Styles.friendName}>
              <Typography style={{fontWeight:700, fontSize:'18px'}}>
              Lily Elizabeth
              </Typography>
            </div>
              
      </ListItemButton>

      <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}}>

        <Stack direction="row" spacing={2}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/3d84vRt/images-1.jpg" />
        </StyledBadge>
        </Stack>

            <div className={Styles.friendName}>
              <Typography style={{fontWeight:700, fontSize:'18px'}}>
              Mary Robert
              </Typography>
            </div>

      </ListItemButton>


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
