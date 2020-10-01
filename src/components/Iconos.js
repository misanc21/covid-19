import React from 'react';
import { makeStyles, Container, Button } from '@material-ui/core';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Iconos = ({color}) => {
    const classes = useStyles();
    return (
        <Container className={classes.containerIcons}>
            <Button href="https://github.com/misanc21" target="_blank">
                <FaGithub className={classes[color]} size='1.3em' />
            </Button>
            <Button href="https://www.linkedin.com/in/misael-nivio-cortes-150034176/" target="_blank">
                <FaLinkedin className={classes[color]} size='1.3em' />
            </Button>
            <Button href="https://twitter.com/misanc21" target="_blank">
                <FaTwitter className={classes[color]} size='1.3em' />
            </Button>
            <Button href="https://api.whatsapp.com/send?phone=527713593993" target="_blank">
                <FaWhatsapp className={classes[color]} size='1.3em' />
            </Button>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    containerIcons: {
        display: 'flex',
        justifyContent: 'center'
    },
    white: {
        color: 'white',
        paddingTop: '10px'
    },
    orange: {
        color: '#ff9800',
        paddingTop: '10px'
    }
}));
 
export default Iconos;