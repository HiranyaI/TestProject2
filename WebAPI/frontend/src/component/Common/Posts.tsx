import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import Styles from '../../styles/component/posts.module.css';
import { Style } from '@mui/icons-material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  // marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 100, borderRadius: '15px', boxShadow: 'none', marginTop: '30px' }}>

      
        <div className={Styles.CardHeader}>

          <div className={Styles.CardHeaderLeft}>
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/P4KZL4X/456322.png"/>
            <span className={Styles.profileName}>
                <h4>Pasindu Matharage</h4>
            </span>
    
          </div>

          <div className={Styles.CardHeaderRight}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      

      <CardContent>
        <Typography variant="body2" align='left'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image="https://i.ibb.co/F8CGJMs/amenity-bg-b90ce6d4a8eb511e42be.jpg"
        alt="Paella dish"
      />
      
      <CardActions>
        <Stack direction="row" spacing={1}>

          <IconButton aria-label="add to favorites">
            <ThumbUpOutlinedIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ModeCommentOutlinedIcon />
          </ExpandMore>

          <IconButton aria-label="share">
            <ShareOutlinedIcon />
          </IconButton>
        </Stack>

      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comment section here <b>| Under Developing |</b></Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}