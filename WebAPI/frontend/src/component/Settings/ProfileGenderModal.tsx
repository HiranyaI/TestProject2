import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
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

interface ProfileGenderModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileGenderModal: React.FC<ProfileGenderModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> Update your gender
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Box
        sx={{
            width: 500,
            maxWidth: '100%',
        }}>

        <FormControl sx={{marginTop:'10px'}}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>

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

export default ProfileGenderModal;
