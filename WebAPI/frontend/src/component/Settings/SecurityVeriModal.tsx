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

interface SecurityVeriModalProps {
  open: boolean;
  onClose: () => void;
}

const SecurityVeriModal: React.FC<SecurityVeriModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> 2-Step verification
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Card variant="outlined" sx={{marginBottom:'10px'}}>
            <Stack p={2} direction='row'
            sx={{
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <Typography>
                    2-Step verification is ON
                </Typography>

                <Button className={Styles.verifyOffBtn} sx={{
                    textTransform:'capitalize'
                }}>
                    Turn Off
                </Button>
            </Stack>
            
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

export default SecurityVeriModal;
