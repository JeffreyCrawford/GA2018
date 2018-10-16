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
class submitAttendee extends React.Component {

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
        checkInTime: "",
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

    /* Handles the submit button and executes the post request of the current state */
    handleSubmit = event => {   
		event.preventDefault()
        fetch("/api/attendees", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
    }   

    /* Handles the cancel button and wipes the state */
	handleCancel = event => 
		this.setState({
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
		checkInTime: "",
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
                            required
                            id="fullName"
                            label="fullName"
                            autoFocus={true}
                            className={classes.textField}
                            value={this.state.fullName}
                            onChange={this.handleChange('fullName')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="firstName"
                            label="firstName"
                            className={classes.textField}
                            value={this.state.firstName}
                            onChange={this.handleChange('firstName')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="middleName"
                            label="middleName"
                            className={classes.textField}
                            value={this.state.middleName}
                            onChange={this.handleChange('middleName')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField     
                            id="lastName"
                            label="lastName"
                            className={classes.textField}
                            value={this.state.lastName}
                            onChange={this.handleChange('lastName')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="jobTitle"
                            label="jobTitle"
                            className={classes.textField}
                            value={this.state.jobTitle}
                            onChange={this.handleChange('jobTitle')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                    </ListItem>
                    
                    <ListItem>

                        <TextField
                            id="account"
                            label="account"
                            className={classes.textField}
                            value={this.state.account}
                            onChange={this.handleChange('account')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="countyAccountAccount"
                            label="countyAccountAccount"
                            className={classes.textField}
                            value={this.state.countyAccountAccount}
                            onChange={this.handleChange('countyAccountAccount')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="rsvpGa2018"
                            label="rsvpGa2018"
                            className={classes.textField}
                            value={this.state.rsvpGa2018}
                            onChange={this.handleChange('rsvpGa2018')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="proxyDesigneeGa2018"
                            label="proxyDesigneeGa2018"
                            className={classes.textField}
                            value={this.state.proxyDesigneeGa2018}
                            onChange={this.handleChange('proxyDesigneeGa2018')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="ga2018AsADesigneeFor"
                            label="ga2018AsADesigneeFor"
                            className={classes.textField}
                            value={this.state.ga2018AsADesigneeFor}
                            onChange={this.handleChange('ga2018AsADesigneeFor')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                    </ListItem>

                    <ListItem>

                        <FormControlLabel
                            control={
                                <Switch
                                    id="nopecGeneralAssemblyMember"
                                    checked={this.state.nopecGeneralAssemblyMember}
                                    onChange={this.handleChecked('nopecGeneralAssemblyMember')}
                                    value="nopecGeneralAssemblyMember"
                                    color="primary"
                                />
                            }
                            label="nopecGeneralAssemblyMember"
                        />

                        <TextField
                            id="accountTypeAccountAccount"
                            label="accountTypeAccountAccount"
                            className={classes.textField}
                            value={this.state.accountTypeAccountAccount}
                            onChange={this.handleChange('accountTypeAccountAccount')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                        <TextField
                            id="gaDelegateAccountAccount"
                            label="gaDelegateAccountAccount"
                            className={classes.textField}
                            value={this.state.gaDelegateAccountAccount}
                            onChange={this.handleChange('gaDelegateAccountAccount')}
                            style = {{width: 300}}
                            margin="normal"
                        />

                    </ListItem>
                    
                    <ListItem>

                        <TextField
                            id="checkInTime"
                            label="checkInTime"
                            className={classes.textField}
                            value={this.state.checkInTime}
                            onChange={this.handleChange('checkInTime')}
                            style = {{width: 300}}
                            margin="normal"
                        />

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

submitAttendee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(submitAttendee);