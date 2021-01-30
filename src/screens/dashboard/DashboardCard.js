import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Vehicals } from './VehicalDetails';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '1rem'
    },
    media: {
        height: 200,
    },
});

export default function DashboardCard() {

    const classes = useStyles();
    let history = useHistory();

    const vehicalDetailsHandler = (vehicalMode) => {
        history.push('/vehical/' + vehicalMode)
    }

    return (
        <Fragment>
            {Vehicals.map((vehicalDetails) =>
                <Card onClick={ () => vehicalDetailsHandler(vehicalDetails.mode)} key={vehicalDetails.id} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vehicalDetails.imgsrc}
                            component="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {vehicalDetails.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {"Total Vehicals in " + vehicalDetails.mode + " mode is " + vehicalDetails.total}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>)}
        </Fragment>
    );
}