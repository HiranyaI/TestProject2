import { PermMedia, Label, Room, EmojiEmotions, Style } from '@mui/icons-material'
import React, { useState } from 'react';
import Styles from '../../styles/component/createpost.module.css';
import { Avatar, Button, Card, Divider, Paper, Stack, TextField, Typography, styled } from '@mui/material';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CreatePostModal from './CreatePostModal';

export default function CreatePost() {

    const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);

    const handleopenCreatePostModal = () => {
        setCreatePostModalOpen(true);
    }
    const handleCloseProfilePicModal =() => {
        setCreatePostModalOpen(false);
    }

  return (
    <>
    <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>
        <Stack direction="row" spacing={'0'}>

            <div className={`${Styles.postWriteAcc} postWriteAccount`}>
                <Avatar alt="Remy Sharp" src="https://i.ibb.co/P4KZL4X/456322.png" sx={{
                    margin: '20px'
                }}/>
            </div>

            <div >
            <Button  className={`${Styles.postText} postTextButton`}
            sx={{backgroundColor: '#eeeeee', borderRadius: 3, textAlign: 'left', paddingRight: '500px'}} onClick={handleopenCreatePostModal}>
                Write something here
            </Button>
            </div>
                
        </Stack>

        <Divider/>

        <Stack direction="row" spacing={5} className={`${Styles.postCreateBtns} postCreateButtonWrapper`}>

            <Button variant="text" startIcon={<NotesOutlinedIcon />} className={`${Styles.postBtnTex} postButtonTxt`}
            sx={{
                fontSize: '15px',
                color: '#f09701',
                width: 'max-content',
            }} onClick={handleopenCreatePostModal}>
                <Typography className={Styles.txtBtn}
                style={{fontSize: '16px', fontWeight: 'bold',
            color: '#797979'}}
                
                >Text</Typography>
            </Button>

            <Button variant="text" startIcon={<PhotoLibraryIcon />} className={`${Styles.postBtnTex} postButtonTxt`}
            sx={{
                fontSize: '15px',
                color: '#00bb4c',
                width: 'max-content',
            }} onClick={handleopenCreatePostModal}>
                <Typography className={Styles.txtBtn}
                style={{fontSize: '16px', fontWeight: 'bold',
            color: '#797979'}}
                
                >Photos</Typography>
            </Button>

            <Button variant="text" startIcon={<VideoLibraryIcon />} className={`${Styles.postBtnTex} postButtonTxt`}
            sx={{
                fontSize: '15px',
                color: '#e94d56',
                width: 'max-content',
            }} onClick={handleopenCreatePostModal}>
                <Typography className={Styles.txtBtn}
                style={{fontSize: '16px', fontWeight: 'bold',
            color: '#797979'}}
                
                >Videos</Typography>
            </Button>

            <Button variant="contained" className={`${Styles.postBtn} postButton`}
            sx={{width: 200}} onClick={handleopenCreatePostModal}>
                Post
            </Button>
        </Stack>



        
        
    </Card>

    <CreatePostModal 
    open={isCreatePostModalOpen}
    onClose={handleCloseProfilePicModal}/>
    </>
  )
}
