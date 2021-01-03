import { Button, FormLabel, Grid, Input, makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import UserList from "./UserList";
import MyContext from "./Context";
import { Link } from "react-router-dom";

function Home() {
    const { apiData } = useContext(MyContext);
    const [list, setList] = useState([...apiData]);

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

    const inputChangeHandler = event => {
        console.log(event.target.value);
        setList(apiData.filter(item => {
            return item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
        }));
    }

    return <>
        <h2>Home</h2>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <FormLabel >Search</FormLabel>
        &nbsp;
        <Input onChange={inputChangeHandler} />
                <Button color="link">
                    <Link to="/sortlisted">
                        Show Sortlisted
                    </Link>
                </Button>
                &nbsp;
                <Button color="link">
                    <Link to="/sortlisted">
                        Show Rejected
                    </Link>
                </Button>
                <br></br>
                <br></br>
            </Grid>
        </Grid>
        <UserList list={list} />
    </>;
}

export default Home;