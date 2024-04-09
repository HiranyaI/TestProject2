import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Avatar, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import Styles from '../../styles/component/settingsHome.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

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

interface ProfileNameModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileNameModal: React.FC<ProfileNameModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> Update your name
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Box
        sx={{
            width: 500,
            maxWidth: '100%',
        }}>

        <TextField sx={{marginTop:'15px'}}
        fullWidth label="First name" id="firstName" />
        <TextField sx={{marginTop:'15px', marginBottom:'15px'}}
        fullWidth label="Last name" id="lastName" />

    </Box>

    <Stack direction='row' justifyContent={'right'} spacing={2}>
        <Button variant="text" className={Styles.profileNameCancleBtn}> Cancel
        </Button>

        <Button variant="contained" className={Styles.profileNameSaveBtn}
        sx={{width:'20%'}}> Save
        </Button>
    </Stack>

      </Box>
    </Modal>
  );
};

export default ProfileNameModal;
