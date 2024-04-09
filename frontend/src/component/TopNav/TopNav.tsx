import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Styles from '../../styles/component/topNav.module.css';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Avatar, Button, Divider, Stack } from '@mui/material';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#eeeeee',
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#b2b2b2'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function TopNav() {

  const Navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=> Navigate("/profile")} >
        <Stack direction='row' spacing={2} sx={{alignItems:'center'}}>
          <Avatar />
          <Typography sx={{fontSize:'18px',fontWeight:700}}>Pasindu Matharage</Typography>
        </Stack>
      </MenuItem>

      <Divider />

      <Typography sx={{fontWeight:700, fontSize:'20px', marginLeft:'15px'}}>Account</Typography>
      <MenuItem onClick={()=> Navigate("/settings")}>Settings and Privacy</MenuItem>
      <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      <MenuItem onClick={handleMenuClose}>Language</MenuItem>

      <Divider />

      <Typography sx={{fontWeight:700, fontSize:'20px', marginLeft:'15px', marginRight:'10px'}}>Analytics and Reporting</Typography>
      <MenuItem onClick={handleMenuClose}>Post and Activity</MenuItem>
      <MenuItem onClick={handleMenuClose}>Reporting</MenuItem>

      <Divider />

      <Button sx={{justifyContent:'center', display:'flex', alignItems:'center', textTransform:'capitalize' }}>
        Sign out
      </Button>


    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const routes = [
    { path: '/', icon: <HomeIcon />, label: 'Home' },
    { path: '/people', icon: <PeopleAltIcon />, label: 'People' },
    { path: '/notification', icon: <NotificationsIcon />, label: 'Notification' },
    { path: '/messaging', icon: <MessageIcon />, label: 'Messaging' },
    // { path: '/profile', icon: <AccountCircle />, label: 'Profile' },
  ];


  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

{routes.map((route) => (
        <MenuItem key={route.path}>
          <Link to={route.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton size="large" color="inherit">
              <Badge>
                {route.icon}
              </Badge>
            </IconButton>
            <p>{route.label}</p>
          </Link>
        </MenuItem>
      ))}

    </Menu>
  );

  return (
    
    
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{background:'white', width:'100%', boxShadow:'none' }}>
        <Toolbar>
        <img
            className={`${Styles.connectXLogo} ConnectX_Logo`}
            src={"images/ConnectXLogo.png"}
            alt='ConnectX Logo'
            style={{width: '5%'}}
            />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:'#b2b2b2'}}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ color:'#b2b2b2', display: { xs: 'flex ', md: 'flex' } }}>

          {routes.map((route) => (
                <Link key={route.path} to={route.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <IconButton size="large" color="inherit">
                    <Badge>
                      {route.icon}
                    </Badge>
                  </IconButton>
                </Link>
              ))}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </Box>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    
  );
}