import React, {useState, useContext, useEffect} from 'react';
import { makeStyles, AppBar, Toolbar, Typography,IconButton, Drawer, List, ListItemText, ListItem, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import {Link} from 'react-router-dom'
import mask from '../img/mask.png'

import CovidContext from '../context/covidContext'

const Nav = () => {
    const classes = useStyles();
    const [dra, setDra] = useState(false)
    const covidCon = useContext(CovidContext)
    const {
        getSummaryFunc
    } = covidCon

    useEffect(() => {
        getSummaryFunc()
    //eslint-disable-next-line
    }, [])

    const handleToggle = (open) => {
        setDra(open)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.appBar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> handleToggle(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        <Link to="/" className={classes.link}><img src={mask} alt="mask" className={classes.mask}/>COVID-19 INFO</Link>
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
            <Drawer anchor="left" open={dra} onClose={() => handleToggle(false)}>
            <List>
                <Typography variant="h6" className={classes.DrawerTitle}>
                    Menu
                </Typography>
                <ListItem>
                    <Link to="/" className={classes.draLink} onClick={() => handleToggle(false)}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/pais" className={classes.draLink} onClick={() => handleToggle(false)}>
                        <ListItemIcon><FlagIcon/></ListItemIcon>
                        <ListItemText>By Country</ListItemText>
                    </Link>
                </ListItem>
            </List>
          </Drawer>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Cabin',
    },
    menuButton:{
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    title: {
        marginRight: '2rem',
        fontWeight: 'bold',
        color: 'white',
        fontSize:'2rem'
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
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none!important',
        color: 'white',
        marginRight: '1rem',
        marginLeft: '1rem',
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
      DrawerTitle:{
          textAlign: 'center'
      },
      draLink: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        textDecoration: 'none',
        alignItems: 'center',
        color: '#666666',
        fontWeight: 'bold',
    
        '&:visited':{
            color: '#666666',
        }

      },
      mask: {
          width:'40px',
          position: 'absolute',
          left: '17.7rem',
          [theme.breakpoints.down('xs')]: {
            left: '19.5rem',
        }
      }
}));

export default Nav;