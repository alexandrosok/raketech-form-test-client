import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {},
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'left',
        flexGrow: 3,
    },
}));

export default function FormAppBarComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' elevation='0' color='secondary'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        CONTACT FORM
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
