import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Avatar, Button, Card, CardActionArea, CardContent, CardMedia, Divider, IconButton, Stack, TextField, Typography } from '@mui/material';
import Styles from '../../styles/component/createpostmodal.module.css';
import PublicIcon from '@mui/icons-material/Public';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>

        <Typography sx={{
            fontWeight: 700,
            fontSize: '20px',
            textAlign:'center'}}> Create Post
        </Typography>

        <Divider sx={{margin:'10px'}} />

        <Stack direction='row' spacing={2}>
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/P4KZL4X/456322.png" sx={{height:'45px', width:'45px'}}/>

            <Stack direction='column'>
                <Typography sx={{fontSize:'20px',fontWeight:600}}>
                    Pasindu Matharage
                </Typography>
                <Button startIcon={<PublicIcon className={Styles.publicIconBtn} />} sx={{
                    height:'26px',
                    width:'80px',
                    fontSize:'12px',
                    color:'#252525',
                    textTransform:'capitalize',
                    justifyContent:'left'
                }}>
                    Public
                </Button>
            </Stack>
        </Stack>

        <TextField fullWidth
        placeholder="Write something here"
        multiline

          sx={{ "& fieldset": { border: 'none' }}}
        />

        <Button fullWidth component="label" variant='outlined' startIcon={<AddToPhotosIcon />}
        sx={{
            textTransform:'capitalize',
            padding:'75px',
            border:2,
            borderColor:'#cdcdcd',
            color:'#8e8e8e',
            whiteSpace:'nowrap'            
        }}>
            Add photo and videos
            <VisuallyHiddenInput type="file" />
        </Button>

        <Button sx={{
            width:'100%',
            color:'white',
            borderRadius: 2
        }} className={Styles.PostBtn}>
            Post
        </Button>

      </Box>

    </Modal>
  );
};

export default CreatePostModal;
