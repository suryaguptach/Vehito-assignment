import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Vehicles } from './DashboardVehicleDetails';
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

    const vehicleDetailsHandler = (vehicleMode) => {
        history.push('/vehicle/' + vehicleMode)
    }

    return (
        <Fragment>
            {Vehicles.map((vehicleDetails) =>
                <Card onClick={ () => vehicleDetailsHandler(vehicleDetails.mode)} key={vehicleDetails.id} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vehicleDetails.imgsrc}
                            component="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {vehicleDetails.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {"Total Vehicles in " + vehicleDetails.mode + " mode is " + vehicleDetails.total}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>)}
        </Fragment>
    );
}