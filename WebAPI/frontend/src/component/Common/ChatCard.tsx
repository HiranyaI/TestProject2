import React from 'react'
import Styles from '../../styles/component/chatcard.module.css';
import { ExpandMore } from '@mui/icons-material';
import { Card, Avatar, IconButton, CardContent, Typography, CardMedia, CardActions, Stack, Collapse, Button, Divider, ListItemAvatar, ListItemButton, ListItemText, InputBase, styled } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  textAlign: 'left',
  borderRadius: '6px',
  backgroundColor: '#eeeeee',
  '&:hover': {
    backgroundColor: '#eeeeee',
  },
  
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '25px',
    marginRight: '25px',
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#b2b2b2'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#797979',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ChatCard() {
  
  const Navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>

      <Stack direction="row" spacing={'auto'} sx={{ marginTop:'20px', marginLeft:'20px', marginRight:'20px', marginBottom:'15px'}}>

        <div className={Styles.chatCardName}>
          <Typography style={{fontSize: '24px', fontWeight: 900, color: '#252525'}}>
            Chat
          </Typography>
        </div>

        <div className={Styles.chatCardIcon}>
        <IconButton aria-label="start chat" style={{color: '#252525', position:'relative', alignItems:'left'}}>
            <AddCommentIcon />
          </IconButton>
        </div>

      </Stack>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
        />
      </Search>

      <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}}>
        <ListItemAvatar>
          <Avatar
            alt='jhg'
            src='https://i.ibb.co/0XF6p6b/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg'
          />

          </ListItemAvatar>
            <div className={Styles.NamenMsg}>
              <Typography style={{fontWeight:700, fontSize:'18px'}}>
                ABC Silva
              </Typography>
              <Typography style={{fontSize:'12px'}}>
              Lorem Ipsum is simply dummy text of the printing...
              </Typography>
            </div>
              
              
      </ListItemButton>

      <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}}>
        <ListItemAvatar>
          <Avatar
            alt='jhg'
            src='https://i.ibb.co/whCbrks/download.jpg'
          />

          </ListItemAvatar>
            <div className={Styles.NamenMsg}>
              <Typography style={{fontWeight:700, fontSize:'18px'}}>
              Willumsan Perera
              </Typography>
              <Typography style={{fontSize:'12px'}}>
              Lorem Ipsum is simply dummy text of the printing...
              </Typography>
            </div>
              
      </ListItemButton>

      <ListItemButton style={{borderRadius: 10, marginTop:'7px', marginBottom:'7px'}}>
        <ListItemAvatar>
          <Avatar
            alt='jhg'
            src='https://i.ibb.co/QjknfCw/download-4.png'
          />

          </ListItemAvatar>
            <div className={Styles.NamenMsg}>
              <Typography style={{fontWeight:700, fontSize:'18px'}}>
              Oliver Michael
              </Typography>
              <Typography style={{fontSize:'12px'}}>
              Lorem Ipsum is simply dummy text of the printing...
              </Typography>
            </div>
              
      </ListItemButton>

      <Divider/>

      <CardActions style={{justifyContent: 'center'}}>
      

        <Button variant="text" className={Styles.chatCardButton} onClick={()=> Navigate("/messaging")}>
          <Typography className={Styles.chatCardButtonTxt} 
          style={{fontWeight: '600', color: '#195eeb'}}
                >See all messages</Typography>
        </Button>

      </CardActions>
    </Card>
  )
}
