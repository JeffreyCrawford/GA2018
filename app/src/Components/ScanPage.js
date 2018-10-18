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
        checkInTime: new Date().toString(),
        badge: ""
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

    generateDate = name => event => {
        
    }

    /* Handles the submit button and executes the post request of the current state */
    handleSubmit = event => {   
		event.preventDefault();
            console.log("state " + this.state)
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
        .then(function(res) {
            alert("Hello " + res[0].firstName + " " + res[0].lastName)
        })
    }   

    /* Handles the cancel button and wipes the state */
	handleCancel = event => 
		this.setState({
		badge: ""
    });

	
    /* Renders the form */
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paper} elevation={1}>
                <form className={classes.container} noValidate autoComplete="off">
                    <ListItem>


                        <TextField
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
                        
                        <Button onClick={this.handleSubmit} variant="contained" color="primary" className={classes.buttonSubmit}>
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