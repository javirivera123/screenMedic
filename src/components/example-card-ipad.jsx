import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';



const options = [
    'iPhone 4',
    'iPhone 4s',
    'iPhone 5',
    'iPhone 5s',
    'iPhone 6',
    'iPhone 6 Plus',
    'iPhone 6s',
    'iPhone 6s Plus',
    'iPhone 7',
    'iPhone 7 Plus',
    'iPhone 8',
    'iPhone 8 Plus',
    'iPhone X',
];

const ipadoptions = [
    'iPad 1st Gen',
    'iPad 1st Gen',
    'iPad 2nd gen',
    'iPad 3rd gen',
    'iPad mini 1st gen',
    'iPad 4th gen',
    'iPad mini 2 2nd gen',
    'iPad Air 5th gen',
    'iPad mini 3rd gen',
    'iPad Air 2 6th gen',
    'iPad mini 4 4th gen mini',
    'iPad Pro 12.9’ 1st gen',
    'iPad Pro 9.7’ 1st gen',
    'The iPad',
    'iPad Pro 10.5’',
    'iPad Pro 12.9’',
];


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
    state = {
        value: undefined,
    };

    handleClickOpen = () => {
        this.setState({openButton: true});
        // this.radioGroup.focus();
    };

    componentWillMount() {
        this.setState({ value: this.props.value });
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
            // eslint-disable-next-line react/no-will-update-set-state
            this.setState({ value: nextProps.value });
        }
    }

    radioGroup = null;

    handleEntering = () => {

    };

    handleCancel = () => {
        //this.props.onRequestClose(this.props.value);
        this.setState({openButton: false});
    };

    handleOk = () => {
        //this.props.onRequestClose(this.state.value);
        this.setState({openButton: false});
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value, ...other } = this.props;

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

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense color="primary">
                            Schedule a repair
                        </Button>
                        <Button onClick = {this.handleClickOpen} dense color="primary">
                            {this.state.value}
                        </Button>
                        <Dialog
                            open = {this.state.openButton}
                            onRequestClose={this.handleRequestClose}
                            ignoreBackdropClick
                            ignoreEscapeKeyUp
                            maxWidth="xs"
                            onEntering={this.handleEntering}
                            {...other}
                        >
                            <DialogTitle>Models</DialogTitle>
                            <DialogContent>
                                <RadioGroup
                                    innerRef={node => {
                                        this.radioGroup = node;
                                    }}
                                    aria-label="Models"
                                    name="Models"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    {options.map(option => (
                                        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                                    ))}
                                </RadioGroup>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCancel} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleOk} color="primary">
                                    Ok
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </CardActions>
                </Card>
            </div>
        );
    }
}



SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
    //onRequestClose: PropTypes.func,
    value: PropTypes.string
};

export default withStyles(styles)(SimpleMediaCard);