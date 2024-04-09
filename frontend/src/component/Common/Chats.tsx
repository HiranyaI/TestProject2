import { Avatar, Badge, Box, Container, IconButton, InputBase, ListItemAvatar, ListItemButton, Stack, Typography, styled } from '@mui/material'
import React from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SearchIcon from '@mui/icons-material/Search';
import Styles from '../../styles/component/chats.module.css';

interface ChatsProps {
  onChatItemClick: () => void; // specify the prop type
}

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


  const Chats: React.FC<ChatsProps> = ({ onChatItemClick }) => {
  return (
    <Container fixed className={Styles.friendsMenuLeft}
    sx={{
        position:'relative',
        height:'auto%',
        width:'320',
        

    }}>
        <Stack>
        
            <Stack direction='row'
            justifyContent='space-between'
            alignItems={'center'}
            sx={{marginTop:'10px', marginBottom:'10px'}}>
                <Typography style={{fontSize: '25px', fontWeight: 900, color: '#252525'}}> 
                    Chat 
                </Typography>

                <IconButton style={{color:'#252525'}}>
                    <AddCommentIcon />
                </IconButton>
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

            {/* | Chat List | */}

            <Stack direction='column'>   
                
              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}} onClick={onChatItemClick}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy ...
                                </Typography>
                              </div>                                                       

                        </Stack>        
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}} onClick={onChatItemClick}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>
              
              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>
              
              <ListItemButton style={{borderRadius: 10, marginTop:'10px'}}>
                      <Stack direction='row' alignItems={'center'} spacing={8}>
                        <Stack direction='row'>
                          
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
                                Lorem Ipsum is simply dummy...
                                </Typography>
                              </div>                                                       

                        </Stack>

                                
                      </Stack>                           
              </ListItemButton>

            </Stack>

        </Stack>
        
    </Container>
  )
}
export default Chats;
