import { Card, CardContent, CardHeader, CardMedia, Grid, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import  MyContext from "./Context";

function UserList({ list, status }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        gridElement: {
            cursor: "pointer"
        },
        control: {
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const { apiData } = useContext(MyContext);

    if (status) {
        list = apiData.filter(item => item.status == status);
    }

    return <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                {
                    list.map((item, index) => {
                        return <Grid key={index} className={classes.gridElement} style={{ margin: "5px" }}>
                            <RecipeReviewCard details={item} />
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
    </Grid>;
}

function RecipeReviewCard({ details }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            minWidth: 250,
            border: "0.5px solid #efefef",
            borderBottom: "none"
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));

    const classes = useStyles();
    const history = useHistory();

    return <Card className={classes.root}
        onClick={() => history.push("/user/" + details.id)}>
        <CardHeader
            title={details.name}
        />
        <CardMedia
            className={classes.media}
            image={details.Image}
        />
        <CardContent>
            {/* <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography> */}
        </CardContent>
        {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions> */}
    </Card>;
}

export default UserList;