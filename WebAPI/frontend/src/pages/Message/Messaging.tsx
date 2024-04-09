import { Grid, Card, Stack, Typography, Button, Chip, ListItemButton, ListItemAvatar, Avatar, IconButton, List, ListItem, ListItemText, styled, ListItemIcon, Box, Paper, CardContent } from '@mui/material'
import React, { useState } from 'react'
import Styles from '../../styles/pages/messaging.module.css';
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AllFriendsModal from '../../component/Common/AllFriendsModal';
import Chats from '../../component/Common/Chats';
import Messages from '../../component/Common/Messages';

export default function Messaging() {

  const [showChatList, setShowChatList] = useState(true);
  
  
  const handleChatItemClick = () => {
    setShowChatList(false);
  };
  
  return (
    <>

    <Grid container spacing={0}>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={Styles.MsgLeftSideGrid}>
          <Box>

            {/* Chat list */}
            {showChatList && <Chats onChatItemClick={handleChatItemClick} />}

          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={Styles.MsgRightSideGrid}>
          <Box>
            {/* Messages */}
            {!showChatList && <Messages />}
          </Box>
        </Grid>
        
    </Grid>


     
    </>


  )
}
