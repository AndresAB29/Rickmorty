import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },

    card: {
        width: 200,
        margin: "2%",
    },
    media: {
        height: 140,
    },
    paper: {
        height: 140,
        width: 100,
    }
}));

export const Charachter = (props) => {
    const { char } = props;
    const classes = useStyles();
    return (
        <Container fixed>

            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {char.map((value) => (


                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={value.image}
                                        title={value.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {value.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {value.species}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    )
}