import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import './Header.css';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LogoutModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const drawerWidth = 240;

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Header(props) {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [loginEmail, setLoginEmail] = React.useState();
    const [loginPassword, setLoginPassword] = React.useState();
    const [signupFirstname, setSignupFirstName] = React.useState();
    const [singupLastname, setSignupLastName] = React.useState();
    const [signupEmail, setSignupEmail] = React.useState();
    const [signupPassword, setSignupPassword] = React.useState();
    const [signupContactNo, setSignupContactNo] = React.useState();
    const [openLoginSnackBar, setOpenLoginSnackbar] = React.useState(false);
    const [openSignupSnackBar, setOpenSignupSnackbar] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(props.isLoggedIn);
    const [menuState, setMenuState] = React.useState(false);
    const [anchorEl, setAnchoEl] = React.useState(null);
    const [errorSnackBar, setErrorSnackbar] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [loggoutModal, setLogoutModal] = React.useState(false);

    let history = useHistory();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const closeModalHandler = () => {
        setModalOpen(false);
    }

    const openModalHandler = () => {
        setModalOpen(true);
        setValue(0);
        setLoginEmail("");
        setLoginPassword("");
        setSignupFirstName("");
        setSignupLastName("");
        setSignupEmail("");
        setSignupPassword("");
        setSignupContactNo("");
    }

    const tabChangeHandler = () => {
        if (value === 0) {
            setValue(1);
        } else {
            setValue(0);
        }
    }

    const inputLoginEmailChangeHandler = (e) => {
        setLoginEmail(e.target.value);
    }

    const inputLoginPasswordChangeHandler = (e) => {
        setLoginPassword(e.target.value);
    }

    const inputSignupFirstNameChangeHandler = (e) => {
        setSignupFirstName(e.target.value);
    }

    const inputSignupLastNameChangeHandler = (e) => {
        setSignupLastName(e.target.value);
    }

    const inputSignupEmailChangeHandler = (e) => {
        setSignupEmail(e.target.value);
    }

    const inputSignupPasswordChangeHandler = (e) => {
        setSignupPassword(e.target.value);
    }

    const inputSignupContactNoChangeHandler = (e) => {
        setSignupContactNo(e.target.value);
    }

    const loginClickHandler = () => {
        if (loginEmail === "test@gmail.com" && loginPassword === "password") {
            setIsLoggedIn(true);
            setOpenLoginSnackbar(true);
            setModalOpen(false);
            sessionStorage.setItem('login', true);
        } else {
            setMessage("Wrong Email or Password!");
            setErrorSnackbar(true);
        }
    }

    const dashboardClickHandler = () => {
        history.push('/dashboard')
    }

    const signupSnackBarCloseHandler = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSignupSnackbar(false);
    }

    const loginSnackBarCloseHandler = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenLoginSnackbar(false);
    }

    const errorSnackBarCloseHandler = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorSnackbar(false);
    }

    const onProfileIconClick = (e) => {
        setMenuState(!menuState);
        setAnchoEl(e.currentTarget);
    }

    const onMenuClose = () => {
        setMenuState(!menuState);
        setAnchoEl(null);
    }

    const vehicleManagementClickHandler = () => {
        if (sessionStorage.getItem('login')) {
            history.push('/user/vehicle/management');
        } else {
            setMessage("Please Login First!")
            setErrorSnackbar(true);
        }
    }

    const signupClickHandler = () => {
        setOpenSignupSnackbar(true);
        setModalOpen(false);
    }

    const openLoggoutModal = () => {
        setLogoutModal(true);
        onMenuClose();
    }

    const closeLoggoutModel = () => {
        setLogoutModal(false);
    }

    const onYesLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('login');
        setLogoutModal(false);
        history.push('/');
    }

    const onNoLogout = () => {
        setLogoutModal(false);
    }

    const logoHandler = () => {
        history.push('/');
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <DriveEtaIcon />
                    </IconButton>
                    <Typography style={{ cursor: 'pointer' }} onClick={logoHandler} variant="h6" noWrap>
                        Vehito
                    </Typography>
                    <div className={classes.grow} />
                    {!isLoggedIn ?
                        <List>
                            <ListItem key="header-dashboard" button onClick={dashboardClickHandler}>Dashboard</ListItem>
                        </List> :
                        <List style={{ display: 'inline-flex' }}>
                            <ListItem button onClick={dashboardClickHandler} key={"header_dashboard"}>
                                <ListItemText primary={"Dashboard"} />
                            </ListItem>
                            <div className={classes.grow} />
                            <ListItem button onClick={vehicleManagementClickHandler} key={"header_vehicle_management"}>
                                <ListItemText primary={"Vehicle Management"} />
                            </ListItem>
                        </List>}
                    <div className={classes.grow} />
                    <div>
                        {!sessionStorage.getItem('login') ?
                            <Button onClick={openModalHandler} variant="contained" style={{ backgroundColor: 'white' }} startIcon={<AccountCircle />}
                            >Login</Button> :
                            <div className={classes.customerProifleBtn}>
                                <Button id="customer-profile" variant="contained" style={{ backgroundColor: 'white' }} startIcon={<AccountCircle />}
                                    onClick={onProfileIconClick}>User</Button>
                                <Menu id="profile-menu" open={menuState} onClose={onMenuClose}
                                    anchorEl={anchorEl} getContentAnchorEl={null}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }} keepMounted>
                                    <MenuItem style={{ minHeight: 48 }}><Typography>My
                                        Profile</Typography></MenuItem>
                                    <MenuItem style={{ minHeight: 48 }} onClick={openLoggoutModal}><Typography>Logout</Typography></MenuItem>
                                </Menu>
                            </div>}
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    <ListItem button onClick={dashboardClickHandler} key={"dashboard"}>
                        <ListItemText primary={"Dashboard"} />
                    </ListItem>
                    <ListItem button onClick={vehicleManagementClickHandler} key={"vehicle_management"}>
                        <ListItemText primary={"Vehicle Management"} />
                    </ListItem>
                </List>
            </Drawer>
            <Modal
                ariaHideApp={false}
                isOpen={isModalOpen}
                contentLabel="Login"
                onRequestClose={closeModalHandler}
                style={customStyles}>
                <Tabs value={value} className="tabs" onChange={tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Signup" />
                </Tabs>
                {/* If value is 0 then displays the first tab of the modal */}
                {value === 0 &&
                    <TabContainer>
                        {/* login form with contact no and password input fields */}
                        <FormControl required className="login-and-signup-forms">
                            <InputLabel htmlFor="contactno">Email</InputLabel>
                            <Input id="contactno" type="text" value={loginEmail}
                                contactno={loginEmail}
                                onChange={inputLoginEmailChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required className="login-and-signup-forms">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" value={loginPassword}
                                password={loginPassword} onChange={inputLoginPasswordChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={loginClickHandler}>LOGIN</Button>
                    </TabContainer>
                }
                {value === 1 &&
                    <TabContainer>
                        {/* signup form contains firstname, lastname, email, password and contact no input fields */}
                        <FormControl required className="login-and-signup-forms">
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" value={signupFirstname}
                                signupfirstname={signupFirstname}
                                onChange={inputSignupFirstNameChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl className="login-and-signup-forms">
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" value={singupLastname}
                                signuplastname={singupLastname}
                                onChange={inputSignupLastNameChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required className="login-and-signup-forms">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text" value={signupEmail}
                                signupemail={signupEmail} onChange={inputSignupEmailChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required className="login-and-signup-forms">
                            <InputLabel htmlFor="signupPassword">Password</InputLabel>
                            <Input id="signupPassword" type="password" value={signupPassword}
                                signuppassword={signupPassword}
                                onChange={inputSignupPasswordChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required className="login-and-signup-forms">
                            <InputLabel htmlFor="signupContactNo">Contact No.</InputLabel>
                            <Input id="signupContactNo" type="text" value={signupContactNo}
                                signupcontactno={signupContactNo}
                                onChange={inputSignupContactNoChangeHandler} />
                        </FormControl>
                        <br /><br />
                        <Button variant="contained" onClick={signupClickHandler} color="primary">SIGNUP</Button>
                    </TabContainer>
                }
            </Modal>
            <LogoutModal
                className={classes.modal}
                open={loggoutModal}
                onClose={closeLoggoutModel}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={loggoutModal}>
                    <div className={classes.paper}>
                        <h2 id="spring-modal-title">Do you want to logout ?</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={onYesLogout} variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>Yes</Button>
                            <Button onClick={onNoLogout} variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>No</Button>
                        </div>
                    </div>
                </Fade>
            </LogoutModal>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openLoginSnackBar}
                autoHideDuration={4000}
                onClose={loginSnackBarCloseHandler}
                message="Logged in successfully!"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit"
                            onClick={loginSnackBarCloseHandler}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            {/* signup snackbar to display the message if customer registered successfully  */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSignupSnackBar}
                autoHideDuration={4000}
                onClose={signupSnackBarCloseHandler}
                message="Registered successfully! Please login now!"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit"
                            onClick={signupSnackBarCloseHandler}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={errorSnackBar}
                autoHideDuration={4000}
                onClose={errorSnackBarCloseHandler}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit"
                            onClick={errorSnackBarCloseHandler}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}