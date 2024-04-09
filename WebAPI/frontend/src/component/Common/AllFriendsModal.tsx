// Import necessary dependencies from Material-UI
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Button, Chip, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import Styles from '../../styles/component/allFriendsModal.module.css';

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


interface AllFriendsModalProps {
  open: boolean;
  onClose: () => void;
}

const AllFriendsModal: React.FC<AllFriendsModalProps> = ({ open, onClose }) => {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography style={{
            fontWeight: 700,
            fontSize: '20px'

        }}>
            User name’s Network
        </Typography>

        <Stack direction="row" spacing={1} style={{marginTop:'15px'}}>

              <Chip className={Styles.friendsChips}
              sx={{
                backgroundColor:'#195eeb',
                color:'white',
                fontSize:'13px',
              }} 
              label="Following" onClick={handleClick} />

              <Chip label="Followers" variant="outlined" onClick={handleClick} />
              
        </Stack>

        <ListItem style={{marginTop:'15px'}}>
                <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/0XF6p6b/360-F-617132669-Yptv-M7f-Iucza-Ub-YYp-Me3-VTLimw-Zwzl-Wf.jpg'
                />
                </ListItemAvatar>

                <ListItemText>
                Andrew Silvester
                </ListItemText>

                <Stack spacing={1} direction="row">
                  <Button variant="outlined" className={Styles.friendsActionBtnFollowing}
                  style={{
                    color:'#797979',
                    fontWeight:500,
                    borderWidth:2,
                    borderColor:'#797979',
                    borderRadius:'50px'
                  }}
                  >Follow</Button>

                </Stack>
        </ListItem>

        <ListItem >
                <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/svPD1gd/download.jpg'
                />
                </ListItemAvatar>

                <ListItemText>
                Andrew Silvester
                </ListItemText>

                <Stack spacing={1} direction="row">
                  <Button variant="outlined" className={Styles.friendsActionBtnFollowing}
                  style={{
                    color:'#797979',
                    fontWeight:500,
                    borderWidth:2,
                    borderColor:'#797979',
                    borderRadius:'50px'
                  }}
                  >Follow</Button>

                </Stack>
        </ListItem>

        <ListItem >
                <ListItemAvatar>
                <Avatar
                  alt='jhg'
                  src='https://i.ibb.co/KzKvtMT/images.jpg'
                />
                </ListItemAvatar>

                <ListItemText>
                Andrew Silvester
                </ListItemText>

                <Stack spacing={1} direction="row">
                  <Button variant="outlined" className={Styles.friendsActionBtnFollowing}
                  style={{
                    color:'#797979',
                    fontWeight:500,
                    borderWidth:2,
                    borderColor:'#797979',
                    borderRadius:'50px'
                  }}
                  >Follow</Button>

                </Stack>
        </ListItem>


      </Box>
    </Modal>
  );
};

export default AllFriendsModal;
