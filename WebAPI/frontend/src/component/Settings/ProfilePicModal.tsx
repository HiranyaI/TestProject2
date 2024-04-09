import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Avatar, Button, Divider, Stack, Typography } from '@mui/material';
import Styles from '../../styles/component/settingsHome.module.css';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 500,
  background: 'white',
  boxShadow: 24,
  p:4,
  borderRadius: 5,

  '@media (max-width: 600px)': {
      width: '75%', //for below 600px
  },
};

interface ProfilePicModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfilePicModal: React.FC<ProfilePicModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> Update profile picture 
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Box sx={{flexDirection: 'column', display: 'flex', alignItems: 'center', position: 'center'}}
                         gap={2} className={Styles.UploadProfilePic_Img}>

                        <Box sx={{display: 'flex'}}>

                                    <Avatar
                                        alt="profile-picture"
                                        src=''
                                        sx={{width: 200, height: 200, mt: 3}}
                                    />
                                    
                        </Box>

                        <Stack direction='row' spacing={3} sx={{margin:'10px'}}>
                            <Button sx={{
                                textTransform:'capitalize',
                                width: '150px',
                                backgroundColor:'#E5E5E5',
                                color:'#252525'
                                }}> Upload photo 

                                <VisuallyHiddenInput type="file" />
                                
                                </Button>
                                
                            <Button sx={{
                                textTransform:'capitalize',
                                width: 'max-content',
                                color:'#cbcbcb'
                                }}> Remove </Button>
                        </Stack>

                        <Button variant="contained" className={Styles.profilePicSetBtn}
                        sx={{
                            backgroundColor:'#195eeb',
                            textTransform:'capitalize',
                            color:'white',
                            width:'100%',
                            borderRadius: 2
                            
                            }}> Set as profile picture</Button>
                    </Box>

      </Box>
    </Modal>
  );
};

export default ProfilePicModal;
