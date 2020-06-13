import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: theme.palette.background.light
    }
}))
const Layout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            {props.children}
        </div>
    )
}

export default Layout;