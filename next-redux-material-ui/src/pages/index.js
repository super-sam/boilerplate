import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import {
    AppBar,
    Grid,
    IconButton,
    Typography
} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/icons/Menu';

import './style.scss';

const useStyles = makeStyles(theme => ({
    container: {
        padding: "0 5%",
    },
    appBar: {
        padding: "10px 0",
        backgroundColor: theme.palette.background.default
    },
    main:{
        padding: "20%",
        color: theme.palette.primary.dark
    }
}));

const MyAccount = (props) => {
    const classes = useStyles();

    return(
        <>
            <AppBar
                className = {classes.appBar}
                elevation={0}
                position="fixed"
            >
                <Grid
                    className={classes.container}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="left"
                    >
                        <Grid item xs={2}>
                            <IconButton
                                color="primary"
                                disableFocusRipple={true}
                                edge="start"
                                >
                                <Menu />
                            </IconButton>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h4" color="primary">
                                BoilerPlate
                            </Typography>
                        </Grid>
                </Grid>
            </AppBar>
            <div className={classes.main}>
                <Typography variant="h3" align="center">
                    This is a BoilerPlate for NextJS Redux and Material UI
                </Typography>
            </div>
            
        </>
    )
}

export default MyAccount;