import { Button, Card, CardActions, CardHeader, CardMedia, IconButton, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import MyContext from "./Context";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 500
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

function UserDetails() {
    const { apiData } = useContext(MyContext);
    let { id } = useParams();
    let history = useHistory();
    let details = apiData.filter(item => item.id == id)[0];
    const classes = useStyles();

    const sortListHandler = () => {
        details.status = "SORTLISTED";
        history.push("/home");
    };

    const rejectHandler = () => {
        details.status = "REJECTED";
        history.push("/home");
    }

    return <div className={classes.root}>
        <h2 style={{display: "inline"}}>User Details</h2>
        &nbsp;
        <Button color="link">
            <Link to="/home">
                Back To Home
            </Link>
        </Button>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardHeader
                        title={details.name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={details.Image}
                    />
                    <CardActions disableSpacing>
                        <Button color="primary" onClick={sortListHandler}>
                            SortList
                        </Button>
                        <Button color="secondary" onClick={rejectHandler}>
                            Reject
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>;
}

export default UserDetails;