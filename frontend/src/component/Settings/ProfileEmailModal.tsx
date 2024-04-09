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

interface ProfileEmailModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileEmailModal: React.FC<ProfileEmailModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> Update your email
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Card className={Styles.contactEmailCard} variant="outlined" sx={{padding:'20px'}}>
            <Typography variant='h6'> Contact Email</Typography>
            <Typography sx={{fontSize:'15px'}}>The address where you get information about most of this account.</Typography>
            
            <TextField sx={{
                marginTop:'20px',
                width:'100%'
            }}
            id="outlined-helperText"
            label="Contact email here"
            defaultValue="someone@gmail.com"
            />
        </Card>

        <Card className={Styles.recoverEmailCard} variant="outlined" sx={{padding:'20px', marginTop:'10px'}}>
            <Typography variant='h6'> Recovery email</Typography>
            <Typography sx={{fontSize:'15px'}}>The address where ConnectX can contact you if there’s unusual activity in your account or if you get locked out.</Typography>
            
            <TextField sx={{
                marginTop:'20px',
                width:'100%'
            }}
            id="outlined-helperText"
            label="Recovery email here"
            defaultValue="someone@gmail.com"
            />
        </Card>

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

export default ProfileEmailModal;
