import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import MyTiles from '../components/tiles.jsx';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor: '#24292e',
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
        paddingTop: 8,
        paddingBottom: 16,
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
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'banner/mountains.jpg'}
                        title="Contemplative Reptile"
                    />
                    <div>
                        <h1> Screen Medic: SmartPhone Repair  </h1>
                    </div>
                    <h4>   </h4>
                    <Typography type="body1" component="p">
                        Got a cracked or broken smartphone device? Look no further! The Screen Medic can have your
                        device back to great condition!
                    </Typography>
                    <div>
                        <MyTiles>
                        </MyTiles>
                    </div>
                </Paper>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
