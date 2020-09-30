import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography,IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const Nav = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.appBar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Covid-19 Info
                    </Typography>
                    <div className={classes.links}>
                        <Typography variant="subtitle1">
                            <Link to="/" className={classes.link}>Home</Link>
                        </Typography>
                        <Typography variant="subtitle1">
                            <Link to="/pais" className={classes.link}>By Country</Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Cabin',
    },
    title: {
        marginRight: '2rem',
        fontWeight: 'bold'
    },
    appBar: {
        display:'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center'
    },
    links: {
        flexGrow: 1,
        display:'flex',
        flexFlow: 'row nowrap',
        color: 'white',
        justifyContent: 'flex-start',
    },
    link: {
        textDecoration: 'none!important',
        color: 'white',
        marginRight: '1rem',
        marginLeft: '1rem',
    }
}));

export default Nav;