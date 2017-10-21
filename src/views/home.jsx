import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ExampleCard from '../components/example-card.jsx';
import {Grid} from "../../node_modules/material-ui/index";

let MediaReact = require('react-media');

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
        width: '100%',
    },
    media: {
        marginBottom:20,
        marginTop:7,
        minHeight: 300,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paper: theme.mixins.gutters({
        paddingTop: 10,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 8,
    }),
    mobilePaper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});
class Home extends Component {
    render() {
        const classes = this.props.classes;
        return(
            <div>

                    <div>
                        <MediaReact query="(max-width: 599px)">
                            {matches => matches ? (
                                    <div>
                                        <Paper className={classes.mobilePaper} elevation={10}>
                                            <CardMedia
                                                className={classes.media}
                                                image={process.env.PUBLIC_URL + 'banner/mountains.jpg'}
                                                title="Contemplativ"
                                            />
                                            <div>
                                                <h1> Screen Medic: SmartPhone Repair  </h1>
                                            </div>
                                            <h4>   </h4>
                                            <Typography type="body1" component="p">
                                                Got a cracked or broken smartphone device? Look no further! The Screen Medic can have your
                                                device back to great condition!
                                            </Typography>

                                            <div className={classes.mobile}>
                                                <Grid container spacing={10}>
                                                    <Grid item xs={12}>
                                                        <ExampleCard
                                                            title = {'iphone X'}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/ip7.png'}>
                                                            price = {'Coming Soon'}
                                                        </ExampleCard>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <ExampleCard
                                                            title = {'iphone '}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/iphone6.png'}>
                                                        </ExampleCard>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <ExampleCard
                                                            title = {'iphone 5'}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/ip7.png'}>
                                                        </ExampleCard>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <ExampleCard
                                                            title = {'iPad'}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/iphone6.png'}>
                                                        </ExampleCard>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Paper>
                                    </div>
                            ) : (
                                <div>
                                    <Paper className={classes.paper} elevation={10}>
                                        <CardMedia
                                            className={classes.media}
                                            image={process.env.PUBLIC_URL + 'banner/mountains.jpg'}
                                            title="Contemplativ"
                                        />
                                        <div>
                                            <h1> Screen Medic: SmartPhone Repair  </h1>
                                        </div>
                                        <h4>   </h4>
                                        <Typography type="body1" component="p">
                                            Got a cracked or broken smartphone device? Look no further! The Screen Medic can have your
                                            device back to great condition!
                                        </Typography>
                                            <div className={classes.root}>
                                                <Grid container spacing={24}>
                                                    <Grid item xs>
                                                        <ExampleCard
                                                            title = {'iphone 7'}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/ip7.png'}>
                                                            price = {'$89'}
                                                        </ExampleCard>
                                                    </Grid>
                                                    <Grid item xs>
                                                        <ExampleCard
                                                            title = {'iphone 6'}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/iphone6.png'}>
                                                        </ExampleCard>
                                                    </Grid>
                                                    <Grid item xs>
                                                        <ExampleCard
                                                            title = {'iphone 5'}
                                                            image = {process.env.PUBLIC_URL + './iphonepics/ip7.png'}>
                                                        </ExampleCard>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                    </Paper>
                                </div>
                            )}
                        </MediaReact>

                    </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
