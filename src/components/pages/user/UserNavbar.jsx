import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    Tooltip,
    MenuItem,
    styled,
    tooltipClasses
} from '@mui/material';
import { CgLogOff } from "react-icons/cg";
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {toast} from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';

const pages = [ 'BookLists'];
const settings = ['BookLists', 'Logout'];




const AdminNavbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleLogout = () => {
        toast.success('Logged out successfully!')
          navigate('/')
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const BootstrapTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.black,
        },
      }));

    return (
        <AppBar position="sticky" >
            <Container maxWidth="lg">
                <Toolbar disableGutters >
                    <HomeRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography

                        variant="h6"
                        noWrap
                        component={Link}
                        to="/dashboard/user/"
                        sx={{
                            mr: 3,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 600,
                            fontSize:'20px',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontFamily: 'Poppins, sans-serif'
                        }}
                    >
                        User Dashboard
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography 
                                    textAlign="center">
                                        <Link 
                                        style={{ textDecoration: 'none', color: 'black' }} 
                                        to={`/dashboard/user/${page}`}>
                                        {page}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily: 'Poppins, sans-serif'}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {/* Navbar Links  */}
                                <Link 
                                style=
                                {{ textDecoration: 'none', color: 'white',textTransform:'capitalize',fontSize:'16px'}} to={`/dashboard/user/${page}`}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <BootstrapTooltip 
                        title="Logout" 
                        placement="right">

                            <Button
                                component={Link}
                                to='/'
                                color='inherit'
                                variant='outlined'
                                onClick={handleLogout}
                                >
                            <CgLogOff
                            />
                            Logout
                            </Button>
                        </BootstrapTooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AdminNavbar;



