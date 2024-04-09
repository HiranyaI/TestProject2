import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Avatar, Button, Card, Divider, Stack, TextField, Typography } from '@mui/material';
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

interface SecurityVeriEmailModalProps {
  open: boolean;
  onClose: () => void;
}

const SecurityVeriEmailModal: React.FC<SecurityVeriEmailModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> 2-Step verification email
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Card className={Styles.contactEmailCard} variant="outlined" sx={{padding:'20px', marginBottom:'10px'}}>
            <Typography variant='h6'> Verification Email</Typography>
            
            <TextField sx={{
                marginTop:'20px',
                width:'100%'
            }}
            id="outlined-helperText"
            label="Verificvation email here"
            defaultValue="someone@gmail.com"
            />
        </Card>

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

export default SecurityVeriEmailModal;
