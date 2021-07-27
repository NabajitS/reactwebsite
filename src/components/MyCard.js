import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";
import vs from "../images/vs.jpg"

const MyCard = ({ match }) => {

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        getMatchDetail(id)
            .then((data) => {
                setDetail(data);
                handleOpen();
            })
            .catch((error) => console.log(error))
    }

    const getMatchCard = () => {
        return (
            <Card style={{ marginTop: 15 }}>
                <CardContent>

                    <Grid container justifyContent="center" alignItems="center" spacing={4}>

                        <Grid item>
                            <Typography variant="h5">{match['team-1']}</Typography>
                        </Grid>

                        <Grid item>
                            <img style={{ width: 95 }} src={vs} alt="vs" />
                        </Grid>

                        <Grid item>
                            <Typography variant="h5">{match['team-2']}</Typography>
                        </Grid>

                    </Grid>

                </CardContent>

                <CardActions>
                    <Grid container justifyContent="center">
                        <Button onClick={() => handleClick(match.unique_id)} variant="contained" color="primary" >
                            Show Detail
                        </Button>

                        <Button style={{ marginLeft: 8 }} variant="contained" color="primary" >
                            Start Time : {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>

            </Card>
        )
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
            <DialogContent>

                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>

                    <Typography>
                        Match <span style={{ fontStyle: "italic", fontWeight: "bold" }}> {detail.matchStarted ? "Started" : "Still Not Started"} </span>
                    </Typography>

                    <Typography>
                        Match <span style={{ fontStyle: "italic", fontWeight: "bold" }}> {detail.score} </span>
                    </Typography>

                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>

            </DialogActions>

        </Dialog>
    )

    return (
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    )
}

export default MyCard;