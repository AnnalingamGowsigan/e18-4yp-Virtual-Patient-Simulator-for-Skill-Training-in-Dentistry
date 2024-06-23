import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Tooltip, ListItemIcon } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddBox from '@mui/icons-material/AddBox';
import Logout from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {useUser} from "../../contexts/UserContext.jsx";

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#ffffff',
    color: 'black',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    borderRadius: '20px',
    margin: '16px',
    width: 'auto',
});

const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
});

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const { user, logout } = useUser();  // Use the user context
    const navigate = useNavigate();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleMenuClose();
        navigate('/teacherLogin');  // Navigate to login after logout
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {user && (
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    {user.userName}
                </MenuItem>
            )}
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Virtual Patient Simulator
                </Typography>
                <div>
                    {user ? (
                        <>
                            <Button startIcon={<AddBox />} color="inherit" onClick={() => navigate('/create-case')}>
                                Create Case
                            </Button>
                            <Tooltip title="Account settings">
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Tooltip>
                        </>
                    ) : (
                        <Button startIcon={<AccountCircle />} color="inherit" onClick={() => navigate('/teacherLogin')}>
                            Log In
                        </Button>
                    )}
                </div>
            </StyledToolbar>
            {renderMenu}
        </StyledAppBar>
    );
};

export default Navbar;
