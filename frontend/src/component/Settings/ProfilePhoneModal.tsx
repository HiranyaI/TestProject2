import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Button, Card, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import Styles from '../../styles/component/settingsHome.module.css';

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

interface ProfilePhoneModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfilePhoneModal: React.FC<ProfilePhoneModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> Update your phone number
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Typography>
        Your number can be used to deliver important notifications, help you sign in, and more
        </Typography>

        <TextField sx={{
                marginTop:'20px',
                width:'100%'
            }}
            id="outlined-helperText"
            label="Phone number here"
            defaultValue="+94 00 123 4567"
            />


    <Stack direction='row' justifyContent={'right'} spacing={2} sx={{marginTop:'15px'}}>
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

export default ProfilePhoneModal;
