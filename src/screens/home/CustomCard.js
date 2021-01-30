import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { projectDetails } from './homePageDetails';

const useStyles = makeStyles({
    root: {
        maxWidth: '30%',
        margin: '1rem',
        width: '30%',
    },
    media: {
        height: '200px',
    },
});

export default function CustomCard() {
    const classes = useStyles();

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            { projectDetails.map(card =>
                <Card key={card.id} className={classes.root}>
                    <CardActionArea>
                        <CardMedia 
                            className={classes.media}
                            image={card.imgsrc}
                            title={card.name}
                            component="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {card.subtitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
            }
        </div>
    );
}
