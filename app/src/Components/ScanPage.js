import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'

/* Submit New Attendee form styling */
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  buttonSubmit: {
	margin: theme.spacing.unit,
	backgroundColor: blue[600]
  },
  buttonCancel: {
	margin: theme.spacing.unit,
	backgroundColor: yellow[700]
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 1000
    }

});


/* Renders a form attached to the attendee post route to push new records to the API*/
class ScanPage extends React.Component {

    /* Blank state to store attendee information before submission*/
    state = {
        attendees : [{
            fullName: "",
            firstName: "",
            middleName: "",
            lastName: "",
            jobTitle: "",
            account: "",
            countyAccountAccount: "",
            rsvpGa2018: "",
            proxyDesigneeGa2018: "",
            ga2018AsADesigneeFor: "",
            nopecGeneralAssemblyMember: 0,
            accountTypeAccountAccount: "",
            gaDelegateAccountAccount: "",
            checkInTime: new Date().toTimeString(),
            badge: ""
        }]
    };

    /* Handles the on/off switch for boolean values in the form */
    handleChecked = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    /* Receives changes in the form and modifies the state as they happen*/
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    /* Handles the submit button and executes the post request of the current state */
    checkIn = event => { 
        fetch("/api/attendees/", {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        /* Return the get response in JSON format */
        .then(function(res) {
            return res.json()
        })


    }   

    retrieveAttendee = event => {
        let badge = this.state.badge
        fetch("/api/attendees/" + badge, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            alert("Hello " + res[0].firstName + " " + res[0].lastName)
        })
        .catch(error => {
            alert("Invalid bar code. Please try again.")
        })
        .then(function() {
            window.location.reload()
        })

    }

    combineSubmit = event => {
        event.preventDefault()
        this.checkIn();
        this.retrieveAttendee();
        this.handleCancel();
    }

    wipeState = event => {
        this.setState({})
    }



    /* Handles the cancel button and wipes the state */
	handleCancel = event => 
		this.setState({
            attendees : [{
                fullName: "",
                firstName: "",
                middleName: "",
                lastName: "",
                jobTitle: "",
                account: "",
                countyAccountAccount: "",
                rsvpGa2018: "",
                proxyDesigneeGa2018: "",
                ga2018AsADesigneeFor: "",
                nopecGeneralAssemblyMember: 0,
                accountTypeAccountAccount: "",
                gaDelegateAccountAccount: "",
                checkInTime: new Date().toTimeString(),
                badge: ""
            }]
        });

	
    /* Renders the form */
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paper} elevation={1}>
                <form className={classes.container} noValidate autoComplete="off">
                    <ListItem>


                        <TextField
                            autoFocus
                            id="badge"
                            label="badge"
                            className={classes.textField}
                            value={this.state.badge}
                            onChange={this.handleChange('badge')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                    </ListItem>

                    <ListItem>
                        
                        <Button onClick={this.handleCancel} variant="contained" color="primary" className={classes.buttonCancel}>
                            Cancel
                        </Button>
                        
                        <Button onClick={this.combineSubmit} type="submit" variant="contained" color="primary" className={classes.buttonSubmit}>
                            Submit
                        </Button>

                    </ListItem>
                </form>
            </Paper>
        );
    }
}

ScanPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanPage);