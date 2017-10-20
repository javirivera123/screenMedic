import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};

class SimpleMediaCard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image = {this.props.image}
                        title={this.props.title}
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense color="primary">
                            {this.props.price}
                        </Button>
                        <Button dense color="primary">
                            Schedule a repair
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
    }



SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);